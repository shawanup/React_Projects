import Header from "./component/Layout/Header";

// import Products from "./component/Product/Products";
import Footer from "./component/Layout/footer";
import Cart from "./component/Cart/Cart";
import React, { Suspense, useContext, useEffect, useState } from "react";
import CartProvider from "./component/store/cart-Provider";
import Store from "./pages/Store";
import About from "./pages/AboutPage";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductSummary from "./component/Product/ProductSummary";
import Home from "./pages/HomePage";
import ContactUs from "./pages/ContactUsPage";
import ProductDetails from "./component/Product/ProductDetails";
import AuthPage from "./pages/AuthPage";
import AuthContext from "./component/store/auth-Context";
import NotFound from "./pages/NotFound";
import CartContext from "./component/store/cart-Context";
import "./App.css";
// const AuthPage = React.lazy(() => import("./pages/AuthPage"));
import { FirebaseLink } from "./firebase/firebaseLink";
import Payment from "./pages/Payment";

let isInitial = true;

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const authCtx = useContext(AuthContext);
  let cartCtx = useContext(CartContext);

  let cartItems = cartCtx.items;

  console.log("itemsssss", cartCtx);



  useEffect(() => {
    const sendCartItem = async () => {
      const resp = await fetch(`${FirebaseLink}cart.json`, {
        method: "PUT",
        body: JSON.stringify(cartItems),
      });

      const data = resp.json();

      if (resp.ok) {
        console.log(data);
      } else {
        throw new Error("failed to add item in cart");
      }
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    try {
      sendCartItem();
    } catch (error) {
      alert(error.message);
    }
  }, [cartItems]);

  return (
    <div className="App">
      <Header  />
      {authCtx.isLoggedIn && cartCtx.cartIsShown && <Cart />}
      <ProductSummary />
      <Switch>
        <Route path="/" exact>
          {authCtx.isLoggedIn && <Store />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="/about" exact>
          {authCtx.isLoggedIn && <About />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/home" exact>
          {authCtx.isLoggedIn && <Home />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/contact" exact>
          {authCtx.isLoggedIn && <ContactUs />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/ProductDetails/:id/:category" exact>
          {authCtx.isLoggedIn && <ProductDetails />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Route path="/payment" exact>
        <Payment></Payment>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer Description={"The ApnaCloth"}></Footer>
    </div>
  );
}

export default App;
