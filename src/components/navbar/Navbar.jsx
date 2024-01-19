import React, { useState, useEffect } from 'react';
import classes from "./navbar.module.css";
import { Link } from 'react-router-dom';
import {AiOutlineUser, AiOutlineShoppingCart} from "react-icons/ai";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <div className={`${classes.container} ${isScrolled && classes.onScroll}`}>

        <div className={classes.wrapper}>

          <div className={classes.left}>
            <Link to="/" className={classes.title}>H<span>a</span>p<span>p</span>y<span>f</span>o<span>o</span>D</Link>
          </div>

          <div className={classes.center}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <a href="/">Home</a>
              </li>
              <li className={classes.listItem}>
                <a href="/Contacts">Contacts</a>
              </li>
              <li className={classes.listItem}>
                <a href="/foods">Foods</a>
              </li>
              <li className={classes.listItem}>
                <a href="/faq">FAQ</a>
              </li>
              <li className={classes.listItem}>
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </div>

          <div className={classes.right}>
            <AiOutlineUser className={classes.userIcon} />
            <Link to="/cart" className={classes.cartContainer}>
              <AiOutlineShoppingCart className={classes.cartIcon}/>
              <div className={classes.cartQuantity}>0</div>
            </Link>
            <button className={classes.logout}>Logout</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default Navbar