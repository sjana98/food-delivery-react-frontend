import React, { useState } from 'react';
import classes from "./signup.module.css";
import { Link } from "react-router-dom";
import womaneating from "../../assets/womaneating2.jpg";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";


function Login() {

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [passwordShowIcon, setPasswordShowIcon] = useState(false);
    

    return (
        <>
            <div className={classes.container}>
                <div className={classes.wrapper}>

                    <div className={classes.col}>
                        <div className={classes.title}>Sign Up</div>
                        <form action="" className={classes.signupForm}>
                            <input type='text' placeholder='Enter Name*' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type='text' placeholder='Enter Email*' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span className={classes.passwordWrap}>
                                <input type={(!passwordShowIcon && "password") || (passwordShowIcon && "text")} placeholder='Enter Password*' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <span onClick={() => setPasswordShowIcon((pre) => (!pre))}>
                                    {passwordShowIcon && <LiaEyeSolid className={classes.toggleIcon} />}
                                    {!passwordShowIcon && <LiaEyeSlashSolid className={classes.toggleIcon} />}
                                </span>
                            </span>
                            <p>Already have an account? <span><Link to="/login">Login</Link></span> </p>
                            <button type='Submit' className={classes.signupBtn}>Submit</button>
                        </form>
                    </div>
                    
                    <div className={classes.col}>
                        <img src={womaneating} alt="signup_img" className={classes.leftImg} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login