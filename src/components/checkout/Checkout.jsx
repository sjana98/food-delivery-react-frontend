import React from 'react';
import classes from "./checkout.module.css";
import { useSelector } from 'react-redux';
import deliveryPerson from "../../assets/Delivery_person_on_scooter.png";


function Checkout() {

  const cartFoods = useSelector((item) => item.cart.products);
  let totalPrice = 0;
  cartFoods.map((food) => totalPrice += (food.quantity * food.price));

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>Your order is successfull!</h2>
          <p className={classes.description}>Expect it in 1 hour</p>
          <p className={classes.totalPrice}>Total Amount: ₹{totalPrice}</p>
          <img src={deliveryPerson} className={classes.deliveryPersonPng} alt="delivery_person_on_scooter" />
        </div>
      </div>
    </>
  )
}

export default Checkout