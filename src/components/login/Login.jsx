import React, { useState } from 'react';
import classes from "./login.module.css";
import {Link} from "react-router-dom";
import womaneating from "../../assets/womaneating.jpg";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";


function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordShowIcon, setPasswordShowIcon] = useState(false);
  const [errors, setErrors] = useState([]);

  
  const validate = () => {
    const error = {};

    if (!email) {
      error.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email is not valid format!";
    } else {
      error.email = "";
    };

    if (!password) {
      error.password = "Password is required!";
    } else if (password.length < 5) {
      error.password = "Minimum 6 digits password!";
    } else {
      error.password = "";
    };

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsgs = validate();
    setErrors(errorMsgs);
  };


  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>

          <div className={classes.col}>
            <img src={womaneating} alt="login_img" className={classes.leftImg} />
          </div>

          <div className={classes.col}>
            <div className={classes.title}>Login</div>

            <form onSubmit={handleSubmit} action="" className={classes.loginForm}>
              <input type='text' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors && <div className={classes.errorMsg}>{errors.email}</div>}
              
              <span className={classes.passwordWrap}>
                <input type={(!passwordShowIcon && "password") || (passwordShowIcon && "text")} placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <span onClick={()=>setPasswordShowIcon((pre)=>(!pre))}>
                  {passwordShowIcon && <LiaEyeSolid className={classes.toggleIcon}  />}
                  {!passwordShowIcon && <LiaEyeSlashSolid className={classes.toggleIcon}/>}
                </span>
              </span>
              {errors && <div className={classes.errorMsg}>{errors.password}</div> }

              <p>Don't have an account? <span><Link to="/signup">Sign Up</Link></span> </p>
              <button type='Submit' className={classes.loginBtn}>Submit</button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login