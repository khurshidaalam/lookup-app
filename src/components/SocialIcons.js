import React from 'react';
import search from "../images/search.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import styles from "../styles/Signup.module.css";

const SocialIcons = () => {
  return (
    <>
    <ul className={styles.socialicondiv}>
          <li><img src={search} alt="" /></li>
          <li><img src={facebook} alt="" /></li>
          <li><img src={twitter} alt="" /></li>
        </ul>
    </>
  )
}

export default SocialIcons