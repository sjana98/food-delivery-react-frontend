import React from 'react';
import classes from "./foodsforHome.module.css";
import { Link } from "react-router-dom";
import { foodTypes } from '../../data/data';

function FoodsforHome() {
  return (
    <>
      <section id='foodsforHome' className={classes.container}>
        <div className={classes.wrapper}>
          <span className={classes.subtitle}>What we offer!</span>
          <h2 className={classes.title}>Home kitchen crafts perfect meals for you</h2>
          <div className={classes.foods}>
            {foodTypes.map((foodtype) => (
              <Link to={`/foods/${foodtype.name}`} key={foodtype.id}>
                <div className={classes.foodtypeName}>
                  <h4>{foodtype.name}</h4>
                </div>
                <div className={classes.imgContainer}>
                  <img src={foodtype.img} alt="foodtype_img" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FoodsforHome