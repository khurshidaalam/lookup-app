import React from 'react'
import Form from '../Form';
import styles from "../../styles/Signup.module.css";
import { Link } from 'react-router-dom';
import SocialIcons from '../SocialIcons';

const Signup = () => {
  return (
    <>
      <div className={styles.formarea}>
        <h1>Sign Up to Carrier Lookup</h1>
        <p>Enter your details to create your account</p>
        <Form />
        <p className="m-20">Or continue with these social profile</p>
        <SocialIcons/>
        <p>Already a member? <Link to="/login">Click here to Log In</Link></p>
      </div>
    </>
  )
}

export default Signup;