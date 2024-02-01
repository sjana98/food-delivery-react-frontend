import React, { useState, useEffect } from 'react';
import classes from "./navbar.module.css";
import { Link, NavLink } from 'react-router-dom';
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
            <Link to="/" className={classes.logo}>H<span>a</span>p<span>p</span>y<span>f</span>o<span>o</span>D</Link>
          </div>

          <div className={classes.center}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li className={classes.listItem}>
                <NavLink to="/contacts" exact>Contacts</NavLink>
              </li>
              <li className={classes.listItem}>
                <NavLink to="/foods" exact>Foods</NavLink>
              </li>
              <li className={classes.listItem}>
                <NavLink to="/faq" exact>FAQ</NavLink>
              </li>
            </ul>
          </div>

          <div className={classes.right}>
            <button className={classes.createBtn}><Link to="/create">Create</Link></button>
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