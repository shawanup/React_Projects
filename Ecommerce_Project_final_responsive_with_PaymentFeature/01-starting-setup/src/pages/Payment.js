import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import CartContext from "../component/store/cart-Context";
import AuthContext from "../component/store/auth-Context";
function Payment() {
  const [ispaymentDone, setIsPaymentDone] = useState(false);
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const paymentHandler = () => {
    setIsPaymentDone((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes.payment}>
      {authCtx.isLoggedIn && <h3>Enter your payment details</h3>}
      {!ispaymentDone && authCtx.isLoggedIn && (
        <form className={classes.form} onSubmit={paymentHandler}>
          <input
            type="text"
            className={classes.cardNumber}
            placeholder="Card Number"
            required
          ></input>
          <input
            type="text"
            className={classes.StreetAddress}
            placeholder="Street Address"
            required
          ></input>
          <input
            type="text"
            className={classes.Country}
            placeholder="Country"
            required
          ></input>
          <div className={classes.address}>
            <input
              type="text"
              className={classes.City}
              placeholder="City"
              required
            ></input>
            <input
              type="text"
              className={classes.State}
              placeholder="State"
              required
            ></input>
            <input
              type="text"
              className={classes.ZipCode}
              placeholder="Zip Code"
              required
            ></input>
          </div>
          <h3>Total Amount:${cartCtx.totalamount}</h3>
          <button className={classes.btn} type="submit">
            Pay with Card
          </button>
        </form>
      )}
      {ispaymentDone && authCtx.isLoggedIn && (
        <div className={classes.paymentSuccessful}>
          <h3>Your Payment was successful</h3>
        </div>
      )}
    </div>
  );
}

export default Payment;
