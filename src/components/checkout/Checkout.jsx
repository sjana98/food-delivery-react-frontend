import React, { useEffect } from 'react';
import classes from "./checkout.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { removeAllProduct } from "../../reduxToolkit/cartSlice";
import deliveryPerson from "../../assets/Delivery_person_on_scooter.png";


function Checkout() {

  const cartFoods = useSelector((item) => item.cart.products);
  let totalPrice = 0;
  cartFoods.map((food) => totalPrice += (food.quantity * food.price));
  const totalQuantity = cartFoods.reduce((acc, item) => acc + item.quantity, 0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate(`/account?totalPrice=${totalPrice}&totalQuantity=${totalQuantity}`);

      localStorage.removeItem("persist:auth");
      dispatch(removeAllProduct());
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  });

  

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