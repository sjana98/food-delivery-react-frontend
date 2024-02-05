import React, { useState, useEffect } from 'react';
import classes from "./navbar.module.css";
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const admin = auth ? JSON.parse(auth).isAdmin : false;

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className={`${classes.container} ${isScrolled && classes.onScroll}`}>

        <div className={classes.wrapper}>

          <div className={classes.left}>
            <Link to="/" className={classes.logo}>H<span>a</span>p<span>p</span>y<span>f</span>o<span>o</span>D</Link>
          </div>

          {auth &&
            <div className={classes.center}>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className={classes.listItem}>
                  <NavLink to="/foods">Foods</NavLink>
                </li>
                <li className={classes.listItem}>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className={classes.listItem}>
                  <NavLink to="/contacts">Contacts</NavLink>
                </li>
              </ul>
            </div>
          }

          {auth &&
            <div className={classes.right}>
              {admin &&
                <div className={classes.createBtn}>
                 <button><Link to="/create">Create</Link></button>
                </div>
              }
              <div className={classes.displayUser}>
                <AiOutlineUser className={classes.userIcon} />
                <p>{JSON.parse(auth).username}</p>
              </div>

              <Link to="/cart" className={classes.cartContainer}>
                <AiOutlineShoppingCart className={classes.cartIcon} />
                <div className={classes.cartQuantity}>0</div>
              </Link>

              <button onClick={handleLogout} className={classes.logout}>Logout</button>
            </div>
          }

          {!auth &&
            <div className={classes.right}>
              <button className={classes.authBtn}><Link to="/Signup">Sign Up</Link></button>
              <button className={classes.authBtn}><Link to="/Login">Login</Link></button>
            </div>
          }

        </div>

      </div>
    </>
  )
}

export default Navbar