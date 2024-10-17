import Card from "../UI/Card";
import CartItem from "./CartItem";
import ReactDOM from "react-dom";
import classes from "./CartList.module.css";
import Button from "../UI/Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const CartList = (props) => {
  // Calculate total amount dynamically
  const totalAmount =
    props.cartItems.length > 0
      ? props.cartItems.reduce((total, item) => {
          return total + item.price * item.amount; // Assuming `price` is per item
        }, 0)
      : 0;

  return (
    <>
      {ReactDOM.createPortal(
        <Card className={classes.ul}>
          {props.cartItems ? (
            props.cartItems.map(
              (item) =>
                item.amount > 0 && (
                  <CartItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    price={item.price}
                    onAdd={() => props.add(item.id)} // Pass as function reference
                    onSub={() => props.sub(item.id)} // Pass as function reference
                    onRemove={() => props.remove(item)} // Pass as function reference
                  />
                )
            )
          ) : (
            <h2 style={{ textAlign: "center" }}>Your cart is empty.</h2>
          )}
          <div className={classes.total}>
            <h2>Total</h2>
            <h2>${totalAmount.toFixed(2)}</h2>
          </div>
          <div className={classes["cart-control"]}>
            <Button
              style={{ backgroundColor: "#cf0000bf" }}
              onClick={props.toggleCart}
            >
              Close
            </Button>
            <Button style={{backgroundColor:'black'}} onClick={props.clear} >Clear Cart</Button>
            <Button>Checkout</Button>
          </div>
        </Card>,
        document.getElementById("cart")
      )}
      {ReactDOM.createPortal(
        <Backdrop onClick={props.toggleCart} />,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export default CartList;
