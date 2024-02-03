import React, { useState } from 'react';
import classes from "./signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import womaneating from "../../assets/womaneating2.jpg";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";
import axios from "axios";


function Signup() {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordShowIcon, setPasswordShowIcon] = useState(false);
    const [errors, setErrors] = useState([]);
    const [wrongCredentials, setWrongCredentials] = useState(false);

    const  navigate = useNavigate();

    const validate = () => {         // Form Validation
        const error = {};

        if (!username) {
            error.username = "Enter your name!"
        } else if (username.length <= 1) {
            error.username = "Name must be more than 1 letter!"
        } else {
            error.username = "";
        };

        if (!email) {
            error.email = "Enter your email!"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Email is not valid format!"
        } else {
            error.email = "";
        };

        if (!password) {
            error.password = "Enter password!"
        } else if (password.length <= 5) {
            error.password = "Password must be more than 5 char!"
        } else {
            error.password = "";
        };

        return error;
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const errorsList = validate();     // Fotm validation handle
        setErrors(errorsList);

        try {     // API integration
            const signupAPI = "http://localhost:5000/auth/register";
            const createRequest = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                data: { username, email, password },
            };

            let responseData = await axios(signupAPI, createRequest);
            responseData = responseData.data;
            if (responseData.Token) {                      // Store jwt token and user details in browser local storage
                localStorage.setItem("user", JSON.stringify(responseData.newUserDetails));
                localStorage.setItem("token", JSON.stringify(responseData.Token));
                navigate("/");
            };
            
        } catch (error) {
            if (error.response) {
                setWrongCredentials(true);
                setTimeout(() => {
                    setWrongCredentials(false);
                }, 4000);
            } else if (error.request) {
                alert("Something went wrong. Try again later!!")
            } else {
                console.error("Error during request setup:", error.message);
            };

        };
    };

    

    return (
        <>
            <div className={classes.container}>
                <div className={classes.wrapper}>

                    <div className={classes.col}>
                        <div className={classes.title}>Sign Up</div>
                        <form action="" onSubmit={handleSubmit} className={classes.signupForm}>
                            <input type='text' placeholder='Enter Name*' value={username} onChange={(e) => setUsername(e.target.value)} />
                            {errors && <div className={classes.errorMsg}>{errors.username}</div>} 

                            <input type='text' placeholder='Enter Email*' value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errors && <div className={classes.errorMsg}>{errors.email}</div>} 

                            <span className={classes.passwordWrap}>
                                <input type={(!passwordShowIcon && "password") || (passwordShowIcon && "text")} placeholder='Enter Password*' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <span onClick={() => setPasswordShowIcon((pre) => (!pre))}>
                                    {passwordShowIcon && <LiaEyeSolid className={classes.toggleIcon} />}
                                    {!passwordShowIcon && <LiaEyeSlashSolid className={classes.toggleIcon} />}
                                </span>
                            </span>
                            {errors && <div className={classes.errorMsg}>{errors.password}</div>} 

                            <p>Already have an account? <span><Link to="/Login">Login</Link></span> </p>
                            <button type='Submit' className={classes.signupBtn}>Submit</button>
                        </form>
                    </div>
                    
                    <div className={classes.col}>
                        <img src={womaneating} alt="signup_img" />
                    </div>

                    <div className={classes.wrongCredentials}>
                        {wrongCredentials && <p className={classes.alertMsg}>Already have an user with this email id!!</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup