import React from 'react';
import classes from './userAccount.module.css';
import { useSearchParams } from 'react-router-dom';
import userImg from "../../assets/user.png"
import { CiPizza } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";


function UserAccount() {
    const [searchParams] = useSearchParams();
    const totalPrice = searchParams.get('totalPrice');
    const totalItem = searchParams.get("totalQuantity");
  
    const auth = localStorage.getItem("user");

    const handleDeleteAccount = () => {
        // Implement logic to handle account deletion
        localStorage.clear();
        // Redirect or display appropriate message
    };


    return (
        <div className={classes.profileContainer}>
            <div className={classes.wrapper}>

                {/* Order summery section */}
                <div className={classes.orderSummary}>
                    <CiPizza className={classes.pizzaIcon} />
                    <GiHamburger className={classes.burgerIcon} />

                    <h3>Order Summary</h3>
                    {(totalPrice && totalItem) &&
                        <ul>
                            <li> <span className={classes.label}>Order Status:</span> Processing.. </li>
                            <li> <span className={classes.label}>Delivery Address:</span> N/A </li>
                            <li> <span className={classes.label}>Delivery Time:</span> Expected in 1 hour </li>
                            <li> <span className={classes.label}>Total Item:</span> {totalItem} </li>
                            <li> <span className={classes.label}>Total Price:</span>  ₹{totalPrice} </li>
                        </ul>
                    }
                    {(!totalPrice && !totalItem) && <p className={classes.labelMsg}>Your order summary is empty!! <br/> Please go ahead for some delicious...<FaPizzaSlice /></p>}
                </div>

                {/*  user profile section */}
                <div className={classes.userProfile}>
                    <img src={userImg} alt='User' className={classes.profilePicture} />
                    <div className={classes.profileInfo}>
                        <h5>{JSON.parse(auth).username}</h5>
                        <p>{JSON.parse(auth).email}</p>
                        <button className={classes.deleteButton} onClick={handleDeleteAccount}> Delete Account </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default UserAccount;
