import React, { useState } from 'react';
import classes from "./signup.module.css";
import { Link } from "react-router-dom";
import womaneating from "../../assets/womaneating2.jpg";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";


function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordShowIcon, setPasswordShowIcon] = useState(false);
    const [errors, setErrors] = useState([]);
    const [wrongCredentials, setWrongCredentials] = useState(true);


    const validate = () => {         // Form Validation
        const error = {};

        if (!name) {
            error.name = "Enter your name!"
        } else if (name.length <= 1) {
            error.name = "Name must be more than 1 letter!"
        } else {
            error.name = "";
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsList = validate();
        setErrors(errorsList);

        try {
            
        } catch (error) {

            setWrongCredentials(true);
            setTimeout(() => {
                setWrongCredentials(true);
            }, 3000);
        };
    };

    

    return (
        <>
            <div className={classes.container}>
                <div className={classes.wrapper}>

                    <div className={classes.col}>
                        <div className={classes.title}>Sign Up</div>
                        <form action="" onSubmit={handleSubmit} className={classes.signupForm}>
                            <input type='text' placeholder='Enter Name*' value={name} onChange={(e) => setName(e.target.value)} />
                            {errors && <div className={classes.errorMsg}>{errors.name}</div>} 

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
                    
                    <div className={classes.wrongCredentialsWrap}>
                        {wrongCredentials && <p className={classes.wrongCredentials}>Already have an user with this email id!!</p>}
                    </div>
                    
                    <div className={classes.col}>
                        <img src={womaneating} alt="signup_img" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup