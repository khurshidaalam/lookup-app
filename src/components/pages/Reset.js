import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../../styles/Signup.module.css";

const Reset = () => {
  return (
    <div className={`${styles.formarea} ${styles.resetform}`}>
      <h1>Forgot your password?</h1>
      <p class="w-70">Please enter your email below and we will send you a link to reset your password.
      </p>

      <form className="form">
        <label htmlFor="email">Your Email</label>
        <input type="email" placeholder="alexajui@gmail.com" />

        <button className="orange-btn">continue</button>
      </form>

      <p>Don’t have an account? <Link to="/signup">Click here to Sign Up</Link></p>
    </div>
  )
}

export default Reset