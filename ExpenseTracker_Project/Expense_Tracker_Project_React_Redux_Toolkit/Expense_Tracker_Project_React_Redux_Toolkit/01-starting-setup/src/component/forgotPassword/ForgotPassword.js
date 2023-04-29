import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import classes from "./ForgotPassword.module.css";
import { showNotificationActions } from "../../store/forgotPasswordNotification";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ForgotPassword = () => {
  const InputEmailRef = useRef("");
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showNotification.notification);

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = InputEmailRef.current.value;
    InputEmailRef.current.value = "";
    try {
      const resp = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBCroafSGPHdUTusIDf0ZYzav2O3JYwP5g",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: enteredEmail,
          }),
        }
      );
      const data = await resp.json();

      if (!resp.ok) {
        let errorMessage = data.error.message;
        throw new Error(errorMessage);
      } else {
        console.log("updateProfileData", data);
        dispatch(
          showNotificationActions.showNotification({
            status: "Success",
            message:
              "Password reset email has been sent to your resgistered mobile number",
          })
        );
      }
    } catch (error) {
      dispatch(
        showNotificationActions.showNotification({
          status: "Error",
          message:
            error.message,
        })
      );
    }
  };

  let specialClasses='';
if(show && show.status==='Success')
{
  specialClasses=classes.success;
}

if(show && show.status==='Error')
{
  specialClasses=classes.error;
}

const cssClasses=`${classes.notification} ${specialClasses}`
  return (
    <>
      {show && (
        <div className={cssClasses}>
          <h2>{show.status}</h2>
          <p>{show.message}</p>
        </div>
      )}
      <div className={classes.ForgetPasswordFormContainer}>
        <form className={classes.form} onSubmit={submitHandler}>
          <h4 className={classes.header}>
            Enter the email with which you registered
          </h4>
          <input
            type="text"
            placeholder="Email"
            className={classes.email}
            ref={InputEmailRef}
          ></input>

          <Button className={classes.loginButton}>Send Link</Button>

          <h6 className={classes.forgotPassword}>
            <Link to="/">Already a user?Login</Link>
          </h6>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
