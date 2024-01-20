import React from 'react';
import classes from "./home.module.css";
import Hero from '../hero/Hero';
import illustration1 from "../../assets/male-delivery-guy-riding-scooter.svg";
import illustration2 from "../../assets/delivery-location.svg";
import illustration3 from "../../assets/deliveryman-with-pizza.svg";

function Home() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Hero />
          <div className={classes.delivery}>
            <div className={classes.titles}>
              <span className={classes.deliverySubtitle}>Delivery</span>
              <h2 className={classes.deliveryTitle}>Always on time for you</h2>
            </div>
            <div className={classes.deliveryInfos}>
              <div className={classes.deliveryInfo}>
                <img src={illustration1} alt='deliveryInfo_img' className={classes.firstImg} />
                <h3>Our delivery person is always on time.</h3>
              </div>
              <div className={classes.deliveryInfo}>
                <img src={illustration2} alt='deliveryInfo_img' className={classes.secondImg} />
                <h3>Our delivery person works very hard.</h3>
              </div>
              <div className={classes.deliveryInfo}>
                <img src={illustration3} alt='deliveryInfo_img' className={classes.thirdImg} />
                <h3>Our delivery person is friendly and social.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home