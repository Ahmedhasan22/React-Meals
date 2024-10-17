import "./App.css";
import NavBar from "./components/Layout/NavBar";
import MealsList from "./components/Meals/MealsList";
import FixedCard from "./components/Layout/FixedCard";
import CartList from "./components/Cart/CartList";
import { useState } from "react";
import { MealsContext } from "./Store/MealsData";
import { meals } from "./Store/MealsData"; // Adjust the import according to your file structure

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [mealsData, setMealsData] = useState(meals);

  const updateMealsData = (id, change) => {
    setMealsData((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === id
          ? { ...meal, availableAmount: meal.availableAmount + change }
          : meal
      )
    );
  };

  const clearCartHandler = () => {
    setCartItems([]);
    setMealsData(meals);
  };

  const removeFromCartHandler = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    updateMealsData(item.id, item.amount);
    setCartItems(updatedCartItems);
  };

  const increaseItemAmountHandler = (id) => {
    const availableAmount = mealsData.find(
      (item) => item.id === id
    ).availableAmount;
    if (availableAmount > 0) {
      const updatedCartItems = cartItems.map((i) =>
        i.id === id ? { ...i, amount: i.amount + 1 } : i
      );
      updateMealsData(id, -1);
      setCartItems(updatedCartItems);
    }
  };

  const decreaseItemAmountHandler = (id) => {
    const updatedCartItems = cartItems.reduce((acc, item) => {
      if (item.id === id) {
        if (item.amount > 1) {
          acc.push({ ...item, amount: item.amount - 1 });
          updateMealsData(id, 1); // Increase available amount
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
    setCartItems(updatedCartItems);
  };

  const addToCartHandler = (item) => {
    const isExists = cartItems.find((i) => item.id === i.id);
    let updatedCartItems;

    if (isExists) {
      updatedCartItems = cartItems.map((i) =>
        item.id === i.id ? { ...i, amount: i.amount + 1 } : i
      );
    } else {
      updatedCartItems = [...cartItems, { ...item, amount: 1 }];
    }

    updateMealsData(item.id, -1); // Decrease available amount
    setCartItems(updatedCartItems);
  };

  const toggleCart = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <NavBar toggleCart={toggleCart} count={cartItems.length} />
      <FixedCard />
      <MealsContext.Provider value={{ meals: mealsData }}>
        <MealsList onAdd={addToCartHandler} />
      </MealsContext.Provider>
      {isVisible && (
        <CartList
          toggleCart={toggleCart}
          cartItems={cartItems}
          remove={removeFromCartHandler}
          clear={clearCartHandler}
          add={increaseItemAmountHandler}
          sub={decreaseItemAmountHandler}
        />
      )}
    </>
  );
}

export default App;
