import React from 'react';
import styles from "../styles/Nav.module.css";
import navLogo from "../images/nav-logo.png";
import profilemini from "../images/profile-mini.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.topnav}>
            <div className={styles.logo}>
                <img src={navLogo} alt="" />
            </div>
            <div className={styles.profileside}>
                <p>balance : <span>$125</span></p>
                <ul className={styles.topprofiletab}>
                    <li className={styles.imgarea}><img src={profilemini} alt="" /></li>
                    <li>alexa jui</li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                            <path d="M1 1L6.29289 6.29289C6.68342 6.68342 7.31658 6.68342 7.70711 6.29289L13 1"
                                stroke="#7D7D7E" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar