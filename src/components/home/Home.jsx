import React from 'react';
import classes from "./home.module.css";
import Hero from '../hero/Hero';

function Home() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Hero />
        </div>
      </div>
    </>
  )
}

export default Home