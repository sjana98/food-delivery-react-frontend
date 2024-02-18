import React, { useEffect, useState } from 'react';
import classes from "./foodCatalog.module.css";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { addProduct } from "../../reduxToolkit/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


function FoodCatalog() {
  const [loader, setLoader] = useState(true);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const foodEndPoint = location.pathname.split("/")[2];

  const [serverErrorMsg, setServerErrorMsg] = useState(false);
  const [noQuantityMsgDelay, setNoQuantityMsgDelay] = useState(false);
  const [quantity, setQuantity] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFoodType = async () => {
      try {
        const apiUrl = `http://localhost:5000/product?category=${foodEndPoint}`;
        const createRequest = {
          headers: { "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}` },
        };
        let respData = await axios(apiUrl, createRequest);
        respData = respData.data;
        setFilteredFoods(respData);

        const initialQuantity = {};  // set intial quantity 1 of all products
        respData.forEach((food) => {
          initialQuantity[food._id] = 1;
          setQuantity(initialQuantity);
        });

      } catch (error) {
        if (error.request) {
          setServerErrorMsg(true);
        };

      } finally {
        setLoader(false);

      };

    };
    fetchFoodType();
  }, [foodEndPoint]);


  useEffect(() => {          // Delay product unavaillablity message 
    if (filteredFoods.length === 0 && !serverErrorMsg) {
      const timeOut = setTimeout(() => {
        setNoQuantityMsgDelay(true);
      }, 700);

      return () => {
        clearTimeout(timeOut);
      };
    };
  }, [filteredFoods, serverErrorMsg]);


  const quantityHandle = (foodId, command) => {   // Handle quantity of products individually. 
    const currentQuantity = quantity[foodId];
    const updatedQuantity = { ...quantity };
    if (command === "dec" && currentQuantity > 1) {
      updatedQuantity[foodId] = currentQuantity - 1;
    } else if (command === "inc") {
      updatedQuantity[foodId] = currentQuantity + 1;
    };
    setQuantity(updatedQuantity);
  };

  const cartHandle = (foodId) => {      // Handle product with quantity add to cart.
    const selectedProduct = filteredFoods.find((food) => food._id === foodId);
    const productWithQuantity = { ...selectedProduct, quantity: quantity[foodId] };
    dispatch(addProduct(productWithQuantity));
    toast.success(`${quantity[foodId]} ${selectedProduct.title} is added to cart.`);
  };


  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          {loader && <div className={classes.loader}></div>}

          {(filteredFoods.length !== 0 && !serverErrorMsg) && <h2 className={classes.title}>The best {foodEndPoint} for you</h2>}
          {(filteredFoods.length === 0 && !serverErrorMsg && noQuantityMsgDelay) && <h2 className={classes.noQuantity}>Sorry, currently {foodEndPoint} is not availible for order!</h2>}
          {(serverErrorMsg && !loader) && <h3 className={classes.noQuantity}>Some thing went wrong. Please try again later!!</h3>}

          {filteredFoods.length !== 0 &&
            filteredFoods.map((fd) => (
              <div className={classes.foodInner} key={fd._id}>

                <div className={classes.ImgContainer}>
                  <img src={`http://localhost:5000/images/${fd.img}`} alt="food_img" className={classes.foodImg} />
                </div>

                <div className={classes.foodDetails}>
                  <h4 className={classes.foodTitle}>{fd.title}</h4>

                  <p className={classes.foodDescription}><span>Description:</span> {fd.description.slice(0, 115)} </p>

                  <p className={classes.foodCategory}><span>Category:</span> {fd.category}</p>

                  <div className={classes.foodQuantity}>
                    <span>Quantity:</span>
                    <button disabled={quantity[fd._id] === 1} onClick={() => quantityHandle([fd._id], "dec")} className={classes.quentityBtn}><AiOutlineMinusCircle /></button>
                    <span className={classes.quantityNum}>{quantity[fd._id]}</span>
                    <button onClick={() => quantityHandle([fd._id], "inc")} className={classes.quentityBtn}><AiOutlinePlusCircle /></button>
                  </div>

                  <p className={classes.foodPrice}><span>Price:</span> ₹ {fd.price}/-</p>

                  <button onClick={() => cartHandle(fd._id)} className={classes.cartBtn}>add to cart <AiOutlineShoppingCart className={classes.cartIcon} /></button>
                </div>

              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default FoodCatalog