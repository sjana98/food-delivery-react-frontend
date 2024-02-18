import React from 'react';
import classes from "./cart.module.css";
import { useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";

function Cart() {
  const cartFoods = useSelector((item) => item.cart.products);
  const totalQuantity = cartFoods.reduce((acc, item) => acc + item.quantity, 0);
  const productsTotalPrice = cartFoods.reduce((acc, item) => acc + item.price, 0);
  const totalPriceWithQuantity = totalQuantity * productsTotalPrice;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>Cart Items</h2>
          <div className={classes.mappingFoods}>
            {cartFoods.length > 0 &&
              cartFoods.map((fd) => (
                <div className={classes.foodInner} key={fd._id}>
                    <div className={classes.imgWrapper}>
                      <img src={`http://localhost:5000/images/${fd.img}`} alt="food_img" className={classes.foodImg} />
                    </div>

                    <div className={classes.detailsWrapper}>
                      <h4 className={classes.foodTitle}>{fd.title}</h4>
                      <div className={classes.qtiesWithRemove}>
                        <p className={classes.foodWithQuanity}> {fd.quantity} <RxCross2 className={classes.crossSign}/> ₹{fd.price}</p>
                        <button><AiOutlineDelete  className={classes.removeBtn}/></button>
                      </div>
                    </div>
                </div>
              ))
            }
            {cartFoods.length < 0 && <h3 className={classes.noQuantity}>Your cart is empty. Add first and buy!!</h3>}

            <div className={classes.Calculation}>
              <p className={classes.totalQuantity}>Total quantity: {totalQuantity} </p>
              <p className={classes.totalPrice}>Total price: ₹{totalPriceWithQuantity} </p>
              <button className={classes.buyBtn}>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart