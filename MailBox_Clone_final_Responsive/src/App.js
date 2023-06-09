import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { userAction } from "./features/userSlice";
import "./App.css";
import Compose from "./component/UI/Compose";
import Emaildetail from "./component/Layout/Emaildetail";
import EmailList from "./component/Layout/EmailList";
import { auth } from "./firebase/firebase";
import Header from "./component/UI/Header";
// import Login from "./component/Authentication/Login";
import Sidebar from "./component/sidebar/Sidebar";
import BeatLoader from "react-spinners/BeatLoader";

const Login = lazy(() => import("./component/Authentication/Login"));
function App() {
  const isMessageOpen = useSelector((state) => state.mail.sendMessageIsOpen);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          userAction.signin({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          })
        );
      } else {
        dispatch(userAction.signout());
      }
    });
  }, []);

  console.log(user, "useeeeeeeer");

  return (
    <>
      {user && (
        <div className="App">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <EmailList />
              </Route>
              <Route path="/mail">
                <Emaildetail />
              </Route>
            </Switch>
          </div>
          {isMessageOpen && <Compose />}
        </div>
      )}
      <Suspense
        fallback={
          <BeatLoader
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
        {!user && <Login />}
      </Suspense>
    </>
  );
}

export default App;
