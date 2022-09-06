import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../styles/Signup.module.css";
import SocialIcons from '../SocialIcons';

const Login = () => {
  return (
    <>
      <div className={styles.formarea}>
      <h1>Log In to Your Account</h1>
                <p>Enter your details to log in your account</p>
        <form className="form">
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="alexajui@gmail.com" />

            <label htmlFor="password">Enter Password</label>
            <input type="password" placeholder="***********" />

            <Link to="/buycredits" className="orange-btn">log in</Link>
        </form>
        <p className="m-20">Forget Password?<Link to="/reset"> Click here reset password</Link></p>
        <p className="m-20">Or continue with these social profile</p>
        <SocialIcons/>
        <p>Don’t have an account? <Link to="/signup">Click here to Sign Up</Link></p>
      </div>
    </>
  )
}

export default Login;