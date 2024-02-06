import React, { useEffect, useState } from 'react';
import classes from "./foodCatalog.module.css";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FoodCatalog() {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const foodEndPoint = location.pathname.split("/")[2];

  const [errorMsg, setErrorMsg] = useState(false);

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

      } catch (error) {
        if (error.request) {
          setErrorMsg(true);
        };

      };

    };
    fetchFoodType();
  }, [foodEndPoint]);


  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          {(filteredFoods.length !== 0 && !errorMsg) && <h2 className={classes.title}>Best {foodEndPoint}s for you</h2>}
          {(filteredFoods.length === 0 && !errorMsg) && <h2 className={classes.noQuantity}>Currently {foodEndPoint} is unavailible!</h2>}
          {errorMsg && <h3>Some thing went wrong. Please try again later!!</h3>}

          <div className={classes.foods}>
            {filteredFoods.length !== 0 &&
              filteredFoods.map((fd) => (
                <div className={classes.foodInner} key={fd._id}>

                  <div className={classes.ImgContainer}>
                    <img src={`http://localhost:5000/images/${fd.img}`} alt="food_img" className={classes.foodImg} />
                  </div>

                  <div className={classes.foodDetails}>
                    <h4 className={classes.foodTitle}>{fd.title}</h4>
                    <div className={classes.foodContent}>
                      <span className={classes.foodPrice}>₹ {fd.price}</span>
                      <button type='Submit' className={classes.viewBtn}><Link to={`/food/${fd._id}`}>View</Link></button>
                    </div>
                  </div>

                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodCatalog