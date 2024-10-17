// import React from "react";
import Card from "../UI/Card";
import ReactDOM from "react-dom";
import classes from './FixedCard.module.css'
const FixedCard = () => {
  return ReactDOM.createPortal(
    <Card className={classes['fixed-card']}>
      <h2>Delicious Food, Delivered To You</h2>
      <p style={{color:'white'}}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <br />
      <p style={{color:'white'}}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>,
    document.getElementById("fixed-card")
  );
};

export default FixedCard;
