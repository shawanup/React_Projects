import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-Context";
import Button from "../UI/Button";
import classes from "./CartItem.module.css";
import { FirebaseLink } from "../../firebase/firebaseLink";
const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = async () => {
    cartCtx.removeItem(props.id);


    const resp = await fetch(
      `${FirebaseLink}cart.json`
    );

    const data = await resp.json();
    let existingId = 0;
    let dataKey;
    if (data) {
      for (let key in data) {
        if (data[key].id === props.id) {
          existingId = data[key].id;
          dataKey = key;
          break;
        }
      }
      //PATCH
      if (data[dataKey].amount <= 1) {
        await fetch(
          `${FirebaseLink}cart/${dataKey}.json`,
          {
            method: "DELETE",
          }
        );
      } else {
        //POST
        await fetch(
          `${FirebaseLink}cart/${dataKey}.json`,
          {
            method: "PATCH",
            body: JSON.stringify({
              amount: data[dataKey].amount - 1,
            }),
          }
        );
      }
    }
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
            <Button className={classes.remove} onClick={removeItemHandler}>REMOVE</Button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItem;
