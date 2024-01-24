import React, { useState } from 'react';
import classes from "./login.module.css";
import {Link} from "react-router-dom";
import womaneating from "../../assets/womaneating.jpg";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";


function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordShowIcon, setPasswordShowIcon] = useState(false);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>

          <div className={classes.col}>
            <img src={womaneating} alt="login_img" className={classes.leftImg} />
          </div>

          <div className={classes.col}>
            <div className={classes.title}>Login</div>
            <form action="" className={classes.loginForm}>
              <input type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
              <span className={classes.passwordWrap}>
                <input type={(!passwordShowIcon && "password") || (passwordShowIcon && "text")} placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <span onClick={()=>setPasswordShowIcon((pre)=>(!pre))}>
                  {passwordShowIcon && <LiaEyeSolid className={classes.toggleIcon}  />}
                  {!passwordShowIcon && <LiaEyeSlashSolid className={classes.toggleIcon}/>}
                </span>
              </span>
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