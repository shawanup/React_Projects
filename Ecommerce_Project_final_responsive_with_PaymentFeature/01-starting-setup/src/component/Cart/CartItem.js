import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-Context";
import Button from "../UI/Button";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  console.log("cartItemmmmm", cartCtx);
  const removeItemHandler = () => {
    cartCtx.removeItem(props.id);
  };
  return (
    <>
      <tbody>
        <tr className={classes.cartItems}>
          <td className={classes.clsDesc}>
            <img src={props.src} alt="img1" width="50px" height="50px"></img>
            <span className={classes.name}>{props.cartItemName}</span>
          </td>
          <td>
            <div className={classes.price}>{props.cartItemPrice}</div>
          </td>
          <td className={classes.amount}>
            <span className={classes.amount}>{props.cartItemAmount}</span>
            <Button className={classes.remove} onClick={removeItemHandler}>
              REMOVE
            </Button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItem;
