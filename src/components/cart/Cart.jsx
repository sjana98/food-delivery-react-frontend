import React from 'react';
import classes from "./cart.module.css";
import { useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import { AiOutlineDelete } from "react-icons/ai";
import emptyCart from "../../assets/empty_cart.png";

function Cart() {
  const cartFoods = useSelector((item) => item.cart.products);
  const totalQuantity = cartFoods.reduce((acc, item) => acc + item.quantity, 0);
  const productsTotalPrice = cartFoods.reduce((acc, item) => acc + item.price, 0);
  const totalPriceWithQuantity = totalQuantity * productsTotalPrice;

  return (
    <>
      {/* Cart product mapping section*/}
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
                    <div className={classes.TitleAndQuanWrapper}>
                      <div>
                        <h4 className={classes.foodTitle}>{fd.title}</h4>
                        <p className={classes.foodCategory}>{fd.category}</p>
                      </div>
                      <div className={classes.foodWithQuanity}> {fd.quantity} <RxCross2 className={classes.crossIcon} /> ₹{fd.price}</div>
                    </div>
                    <button className={classes.removeBtn}><AiOutlineDelete className={classes.removeIcon} /></button>
                  </div>

                  <div className={classes.cartStyle}></div>
                  <div className={classes.cartStyle2}></div>
                </div>
              ))
            }
            {cartFoods.length <= 0 && <h3 className={classes.noQuantity}>Your cart is empty. Add first, then buy!! <img src={emptyCart} alt="empty Cart" /></h3>}
          </div>

          {/* Check out section  */}
          {cartFoods.length > 0 &&
            <div className={classes.cartCalculation}>
              <div className={classes.cartWrapper}>
                <h5 className={classes.cartTotal}>Cart Total</h5>
                <p className={classes.totalQuantity}>Total quantity : <span>{totalQuantity} </span></p>
                <p className={classes.totalPrice}>Total price : <span>₹{totalPriceWithQuantity}</span> </p>
              </div>
              <button className={classes.CheckoutBtn}>Proceed to Checkout</button>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Cart