import React, { useContext } from "react";
import classes from "./MealsList.module.css";
import Card from "../UI/Card";
import Meal from "./Meal";
import { MealsContext } from "../../Store/MealsData";
import CartItem from "./../Cart/CartItem";

export default function MealsList(props) {
  const cx = useContext(MealsContext);

  return (
    <Card className={classes.ul}>
      {cx.meals.map((meal) => (
        <Meal
          title={meal.title}
          key={meal.id}
          id={meal.id}
          desc={meal.description}
          price={meal.price}
          amount={meal.availableAmount}
          onAdd={props.onAdd}
          cartItems={props.cartItems}
        />
      ))}
    </Card>
  );
}
