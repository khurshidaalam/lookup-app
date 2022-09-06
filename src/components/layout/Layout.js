import React from 'react';
import styles from "../../styles/Signup.module.css";
import logo from "../../images/logo.png";
import middleimage from "../../images/middleimage.png";

const Layout = ({children}) => {
  return (
    <div className="main">
        <div className={styles.signuparea}>
            <div className={styles.logoarea}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className="middle-image m-20">
                    <img src={middleimage} alt="images" />
                </div>
                <button className="signup-button">sign in</button>
            </div>
            {children}
        </div>
    </div>
  )
}

export default Layout;