import React from 'react';
import FoodsforHome from '../FoodsforHome/FoodsforHome';
import classes from "./foodItems.module.css";

function FoodItems() {
  return (
    <>
      <div className={classes.container}>
          <FoodsforHome />
      </div>
    </>
  )
}

export default FoodItems