// import React from 'react'
import ReactDOM from "react-dom";
import cartLogo from "../../assets/shopping-cart.png";
import classes from "./NavBar.module.css";
const NavBar = (props) => {
  return ReactDOM.createPortal(
    <nav className={classes.nav}>
      <h1 className={classes.title}>
        <span style={{ color: "#500303e8" }}>React</span> Meals
      </h1>
      <button className={classes["cart-button"]} onClick={props.toggleCart}>
        <img src={cartLogo} alt="shopping cart logo" />
        <h3 style={{ color: "white", alignSelf: "center" }}>Your Cart </h3>
        <input
          type="text"
          className={classes.count}
          readOnly
          value={props.count}
          onChange={() => {}}
        />
      </button>
    </nav>,
    document.getElementById("navbar")
  );
};

export default NavBar;
