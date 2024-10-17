import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <>
      {props.amount > 0 && (
        <>
          <div className={classes["cart-item"]}>
            <div className={classes["cart-meal"]}>
              <h2>{props.title}</h2>
              <p style={{ color: "#037C4C", fontSize: "1.2rem" }}>
                ${props.price}
              </p>
            </div>
            <div className={classes["cart-control"]}>
              <div>
                <button onClick={props.onAdd}>+</button>
                <button
                  style={{ backgroundColor: "yellow", color: "black" }}
                  onClick={props.onSub}
                >
                  -
                </button>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={props.onRemove}
                >
                  x
                </button>
              </div>
              <input
                readOnly
                type="text"
                value={`x ${props.amount}`}
                className={classes.amount}
              />
            </div>
          </div>
          <hr className={classes.hr} />
        </>
      )}
    </>
  );
};

export default CartItem;
