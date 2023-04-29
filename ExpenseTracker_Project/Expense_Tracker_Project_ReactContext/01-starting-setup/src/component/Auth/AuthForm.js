import { useContext, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const InputEmailRef = useRef("");
  const InputPasswordRef = useRef("");
  const InputConfirmPasswordRef = useRef("");

  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const toggleAccountHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  console.log("authCtx1", authCtx);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = InputEmailRef.current.value;
    const enteredPassword = InputPasswordRef.current.value;
    const confirmEnteredPassword = InputConfirmPasswordRef.current.value;

    InputEmailRef.current.value = "";
    InputPasswordRef.current.value = "";
    InputConfirmPasswordRef.current.value = "";
    let url;
    if (enteredPassword === confirmEnteredPassword) {
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACWwhQRz6sD3dfeifgbz4FoSI4PjDO4BI";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACWwhQRz6sD3dfeifgbz4FoSI4PjDO4BI";
      }
      try {
        const resp = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("resp1", resp);
        const data = await resp.json();
        if (!resp.ok) {
          let errorMessage = "Authentication Failed";
          if (data && data.error.message && data.error) {
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage);
        } else {
          console.log(data);

          if (isLogin) {
            authCtx.LogIn(data.email, data.idToken);
            localStorage.setItem('Email',data.email);
            history.replace("/verifyUserProfile");
          } else {
            console.log("sign up sucessfully");
            history.replace("/");
          }
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      history.replace("/");
      alert("password is not matched");
    }
  };
  return (
    <div className={classes.authFormContainer}>
      <form className={classes.form} onSubmit={submitHandler} autoComplete>
        <h1 className={classes.header}>{isLogin ? "Sign in" : "Sign Up"}</h1>
        <input
          type="text"
          placeholder="Email"
          className={classes.email}
          ref={InputEmailRef}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className={classes.password}
          ref={InputPasswordRef}
        ></input>
        <input
          type="password"
          placeholder="Confirm Password"
          className={classes.confirmpassword}
          ref={InputConfirmPasswordRef}
        ></input>
        {isLogin && (
          <h6 className={classes.forgotPassword}>
            <Link to='/forgotPassword'>Forgot Password</Link>
          </h6>
        )}
        <button className={classes.formButton}>
          {isLogin ? "Sign in" : "Sign Up"}
        </button>
      </form>
      <button className={classes.loginButton} onClick={toggleAccountHandler}>
        {isLogin ? `Don't have account?Sign up` : "Have an account? Login"}
      </button>
    </div>
  );
};

export default AuthForm;
