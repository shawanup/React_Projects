import classes from "./ProductItem.module.css";
import { useContext } from "react";
// import CartContext from "../store/cart-Context";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-Context";
import CartContext from "../store/cart-Context";
import { FirebaseLink } from "../../firebase/firebaseLink";

const ProductItem = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  const addCartItemHandler = async () => {


console.log('PI',props)
    const enteredAmount = 1;

    const existingItem = cartCtx.items.find((item) => {
      return item.id === props.id;
    });

    console.log("productItem existing item", existingItem);
    if (existingItem) {
      try {
        const resp = await fetch(
          `${FirebaseLink}cart/${existingItem.firebasekey}.json`,
          {
            method: "PATCH",
            body: JSON.stringify({
              amount: existingItem.amount + 1,
            }),
          }
        );
        if (resp.ok) {
          console.log("patch response", resp);
        } else {
          throw new Error("failed to update item in cart");
        }
      } catch (error) {
        alert(error.message);
      }

      cartCtx.addItem({
        id: props.id,
        item: props.item,
        src: props.src,
        price: props.price,
        amount: enteredAmount,
        category:props.category
      });
    } else {
      try {
        const PostResponse = await fetch(
          `${FirebaseLink}cart.json`,
          {
            method: "POST",
            body: JSON.stringify({
              id: props.id,
              item: props.item,
              src: props.src,
              price: props.price,
              amount: enteredAmount,
              category:props.category
            }),
          }
        );

        if (PostResponse.ok) {
          const data = await PostResponse.json();

          cartCtx.addItem({
            id: props.id,
            item: props.item,
            src: props.src,
            price: props.price,
            amount: enteredAmount,
            firebasekey: data.name,
          });
        } else {
          throw new Error("failed to add item in cart");
        }
      } catch (error) {
        alert(error.message)
      }
    }
  };

  return (
    <div className={classes.productItem}>
      <div className={classes.itemName}>{props.item}</div>
      <div className={classes.productImage}>
        {authCtx.isLoggedIn && (
          <Link to={`/ProductDetails/:${props.id}/:${props.category}`}>
            <img src={props.src} alt="img1" width="300px" height="200px"></img>
          </Link>
        )}
      </div>
      <div className={classes.itemfooter}>
        <div className={classes.price}>${props.price}</div>
        <Button className={classes.itmbtn} onClick={addCartItemHandler}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
