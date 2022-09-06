import React from 'react';
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

            <button className="orange-btn">sign up</button>
        </form>
    )
}

export default Form