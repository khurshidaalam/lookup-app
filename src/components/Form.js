import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Form.module.css";

const Form = () => {
    return (
        <form className={styles.form}>
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="alexajui@gmail.com" />

            <label htmlFor="password">Enter Password</label>
            <input type="password" placeholder="***********" />

            <label htmlFor="confirm-password">confirm Password</label>
            <input type="password" placeholder="***********" />

            <div className={styles.checkinput}>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label htmlFor="vehicle1"> I agree with terms and conditions</label>
            </div>

            <Link to="/buycredits" className="orange-btn">sign up</Link>
        </form>
    )
}

export default Form