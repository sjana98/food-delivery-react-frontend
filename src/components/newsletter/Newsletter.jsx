import React from 'react';
import classes from "./newsletter.module.css";
import { AiOutlineSend } from 'react-icons/ai';
import getNewsletter from "../../assets/get-newsletter-updates.svg";


function Newsletter() {
  return (
    <>
      <section id='contacts' className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.subtitle}>Get our latest offers!</div>
          <div className={classes.title}>Newsletter</div>
          <div className={classes.inputContainer}>
            <input type="text" placeholder='Enter email address' />
            <AiOutlineSend className={classes.sendIcon} />
          </div>
          <img src={getNewsletter} alt="getNewsletter_img" className={classes.getNewsletterImg} />
        </div>
      </section>
    </>
  )
}

export default Newsletter