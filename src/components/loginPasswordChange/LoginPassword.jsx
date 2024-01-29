import React, { useState } from 'react';
import classes from "./loginPassword.module.css";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPassword() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordShowIcon, setPasswordShowIcon] = useState(false);
  const [errors, setErrors] = useState([]);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const  navigate = useNavigate();

  const validate = () => {    // Form validation
    const error = {};

    if (!email) {
      error.email = "Enter your signed up email!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email is not valid format!";
    } else {
      error.email = "";
    };

    if (!password) {
      error.password = "Enter new password!";
    } else if (password.length <= 5) {
      error.password = "Password must be more than 5 char!";
    } else {
      error.password = "";
    };

    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsgs = validate(); // Form Validation handle
    setErrors(errorMsgs);

    try {    // API integration
      const passwordUpdateAPI = "http://localhost:5000/auth/password-update";
      const createRequest = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: { email, password },
      };
      const resultData = await axios(passwordUpdateAPI, createRequest);
      if (resultData) {
        alert('Password has been updated successfully!');
        navigate("/login");
      };

    } catch (error) {
      if (error.response) {
        setWrongCredentials(true);
        setTimeout(() => {
        setWrongCredentials(false);
        }, 5000);
      } else if (error.request) {
        alert("Something went wrong. Try again later!!");
      } else {
        console.log('Error', error.message);
      };

    };
  };


  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>

          <div className={classes.col}>
            <div className={classes.title}>Reset Password</div>

            <form onSubmit={handleSubmit} action="" className={classes.loginForm}>
              <input type='text' placeholder='Enter your singed up email*' value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors && <div className={classes.errorMsg}>{errors.email}</div>}

              <span className={classes.passwordWrap}>
                <input type={(!passwordShowIcon && "password") || (passwordShowIcon && "text")} placeholder='Enter new password*' value={password} onChange={(e) => setPassword(e.target.value)} />
                <span onClick={() => setPasswordShowIcon((pre) => (!pre))}>
                  {passwordShowIcon && <LiaEyeSolid className={classes.toggleIcon} />}
                  {!passwordShowIcon && <LiaEyeSlashSolid className={classes.toggleIcon} />}
                </span>
              </span>
              {errors && <div className={classes.errorMsg}>{errors.password}</div>}

              <button type='Submit' className={classes.loginBtn}>Update</button>
            </form>
          </div>

          <div className={classes.wrongCredentials}>
            {wrongCredentials && <p className={classes.alertMsg}>This email does not exist!!</p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPassword