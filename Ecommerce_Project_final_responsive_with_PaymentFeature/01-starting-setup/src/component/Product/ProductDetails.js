import { useParams } from "react-router-dom";
import productsArr from "../../Data/DummyData";
import PantsproductsArr from "../../Data/PantsDummyData";
import Button from "../UI/Button";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import { GiElectric } from "react-icons/gi";
import classes from "./ProductDetails.module.css";
import ReactMagnify from "../UI/ReactImageMagnify";
import { useContext } from "react";
import CartContext from "../store/cart-Context";

const ProductDetails = () => {
  const params = useParams();
  const cartCtx=useContext(CartContext);
  const paramId = params.id.split(":");

  const category = params.category.split(":");

  console.log(category, "ca");
  let filteredItem;
  if (category[1] === "T-Shirts") {
    filteredItem = productsArr.filter((item) => {
      return item.id === +paramId[1];
    });
  } else {
    filteredItem = PantsproductsArr.filter((item) => {
      return item.id === +paramId[1];
    });
  }

  const url = filteredItem[0].imageUrl;

  const addCartItemHandler = () => {
    cartCtx.addItem({
      id: filteredItem[0].id,
      item: filteredItem[0].title,
      src: filteredItem[0].imageUrl,
      price: filteredItem[0].price,
      amount: 1,
    });

    // id={item.id}
    // key={item.id}
    // item={item.title}
    // src={item.imageUrl}
    // price={item.price}
    // category={props.category}
    console.log(filteredItem, "filteredItem");
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.img}>
          {/* <ReactMagnify src={filteredItem[0].imageUrl} alt="img2"/> */}
          <img src={url} alt="img2" width="300px" height="200px"></img>
        </div>
        <div className={classes.btn}>
          <Button className={classes.btn1} onClick={addCartItemHandler}>
            <AiOutlineShoppingCart className={classes.addCartIcon} />
            Add to cart
          </Button>
          <Button className={classes.btn1}>
            <GiElectric className={classes.buyNowIcon} />
            Buy Now
          </Button>
        </div>
      </div>
      <div className={classes.right}>
        <p>Rating and Review</p>
        <p>
          4<AiFillStar></AiFillStar>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
