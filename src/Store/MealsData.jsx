import React from "react";
const meals = [
    {
      id: 1,
      title: "Avocado Toast",
      description: "Toasted bread topped with smashed avocado and poached eggs.",
      price: 8.50,
      availableAmount: 20
    },
    {
      id: 2,
      title: "Greek Yogurt Parfait",
      description: "Creamy Greek yogurt layered with fresh berries and granola.",
      price: 6.00,
      availableAmount: 15
    },
    {
      id: 3,
      title: "Oatmeal",
      description: "Warm oatmeal topped with sliced bananas and honey.",
      price: 4.00,
      availableAmount: 30
    },
    {
      id: 4,
      title: "Smoothie Bowl",
      description: "A refreshing smoothie bowl with spinach, banana, and almond milk.",
      price: 7.00,
      availableAmount: 10
    },
    {
      id: 5,
      title: "Breakfast Burrito",
      description: "Flour tortilla filled with eggs, beans, and salsa.",
      price: 9.00,
      availableAmount: 25
    },
    {
      id: 6,
      title: "Quinoa Salad",
      description: "Nutritious salad with quinoa, chickpeas, cucumber, and feta.",
      price: 10.00,
      availableAmount: 12
    },
    {
      id: 7,
      title: "Grilled Chicken Wrap",
      description: "Grilled chicken wrapped in lettuce with hummus.",
      price: 8.50,
      availableAmount: 18
    },
    {
      id: 8,
      title: "Vegetable Stir-fry",
      description: "Stir-fried seasonal vegetables with tofu and brown rice.",
      price: 9.50,
      availableAmount: 15
    },
    {
      id: 9,
      title: "Baked Salmon",
      description: "Oven-baked salmon served with asparagus and quinoa.",
      price: 15.00,
      availableAmount: 8
    },
    {
      id: 10,
      title: "Chicken Tacos",
      description: "Soft tacos filled with chicken, avocado, and salsa.",
      price: 10.00,
      availableAmount: 20
    }
  ];
  
  const MealsContext = React.createContext({
    meals,
  })
  
  export { meals, MealsContext };
