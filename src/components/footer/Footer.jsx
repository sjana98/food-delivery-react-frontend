import React from 'react';
import classes from "./footer.module.css";
import { AiTwotonePhone, AiTwotoneMail, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { GiHamburger } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { CiPizza } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { LiaHamburgerSolid } from "react-icons/lia";


function Footer() {
  return (
    <>
      <div className={classes.container}>
        {/* Decoration area */}
        <CiPizza className={classes.pizzaIcon1} />
        <FaPizzaSlice className={classes.pizzaIcon2} />
        <GiFullPizza className={classes.pizzaIcon3} />
        <GiHamburger className={classes.burgerIcon1} />
        <LiaHamburgerSolid className={classes.burgerIcon2} />
        <LiaHamburgerSolid className={classes.burgerIcon3} />
        <GiHamburger className={classes.burgerIcon4} />
        {/* Decoration area end*/}
        
        <div className={classes.wrapper}>
          <div className={classes.col}>
            <div className={classes.title}>Working Time</div>
            <ul className={classes.listContents}>
              <li>Monday to Friday</li>
              <li>9AM - 9PM</li>
              <li>Saturday</li>
              <li>1PM - 9PM</li>
              <li><AiTwotonePhone/> +917364952251</li>
            </ul>
          </div>
          <div className={classes.col}>
            <div className={classes.title}>Quick Links</div>
            <ul className={classes.listLinks}>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Term & Conditions</a></li>
              <li><a href="/">Product Returns</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          </div>
          <div className={classes.col}>
            <div className={classes.title}>Stay Connected</div>
            <ul className={classes.listIcons}>
              <li><a href="/"><AiTwotoneMail className={classes.icon}/></a></li>
              <li><a href="/"><AiFillFacebook className={classes.icon}/></a></li>
              <li><a href="/"><AiFillInstagram className={classes.icon}/></a></li>
              <li><a href="/"><BsTwitterX className={classes.icon}/></a></li>
              <li><a href="/"><AiFillLinkedin className={classes.icon}/></a></li>
            </ul>
          </div>
        </div>
        <div className={classes.copyWrapper}>
          <div className={classes.footerLastContent}>CopyRight <span>© HappyFood.</span> All Rights Reserved</div>
        </div>
      </div>
    </>
  )
}

export default Footer