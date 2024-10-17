import Button from "../UI/Button";
import classes from "./Meal.module.css";

const Meal = (props) => {
  const onAddHandler = () => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: 1
    };
  };

  // console.log("Available Amount:", props.amount); // Debugging line

  return (
    <>
      <div className={classes.meal}>
        <div style={{ textAlign: "left" }} className={classes["meal-data"]}>
          <h3>{props.title}</h3>
          <p style={{ fontStyle: "italic", fontSize: "13px" }}>{props.desc}</p>
          <h3 className={classes.price}>${props.price}</h3>
        </div>
        <div className={classes["meal-inner"]}>
          <div className={classes["amount-container"]}>
            <label>Amount </label>
            <input
              type="text"
              disabled
              className={classes.input}
              value={props.amount}
            />
          </div>
          <Button onClick={onAddHandler} disabled={props.amount <= 0}>
            Add to Cart
          </Button>
        </div>
      </div>
      <hr className={classes.hr} />
    </>
  );
};

export default Meal;
