import React, { useContext, useEffect } from "react";
// import ProductSummary from "../component/Product/ProductSummary";
import Products from "../component/Product/Products";
import CartContext from "../component/store/cart-Context";
import productsArr from "../Data/DummyData";
import PantsproductsArr from "../Data/PantsDummyData";
import { FirebaseLink } from "../firebase/firebaseLink";

const Store = () => {
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    console.log('cartCtx',cartCtx)
    if(!cartCtx.isExecuted){
    fetch(`${FirebaseLink}cart.json`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log("store", data);
        for (let key of data) {
          console.log("key", key);
          cartCtx.addItem({...key});
          cartCtx.isExecuteHandler();
        }
      });
    }
  }, []);
  return (
    <>
      <Products category={"T-Shirts"} items={productsArr} />
      <Products category={"Pants"} items={PantsproductsArr} />
    </>
  );
};

export default Store;
