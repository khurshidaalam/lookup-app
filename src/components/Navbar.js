import React, { useState } from 'react';
import styles from "../styles/Nav.module.css";
import navLogo from "../images/nav-logo.png";
import profilemini from "../images/profile-mini.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <header className={styles.header}>
            <nav className={styles.topnav}>
                <div className={styles.logo}>
                    <img src={navLogo} alt="" />
                </div>
                <div className={styles.profileside}>
                    <p>balance : <span>$125</span></p>
                    <div className={styles.topprofiletabarea}>
                    <div className={styles.topprofiletab}>
                        <div className={styles.imgarea}><img src={profilemini} alt="" /></div>
                        <h2>alexa jui</h2>
                        <button 
                        className={styles.dropdownbtn} 
                        onClick={()=>setShow(!show)} 
                        style={{transform:show && `rotate(180deg)`, transition: show ? `all 0.3s` : `all 0.3s`}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                            <path d="M1 1L6.29289 6.29289C6.68342 6.68342 7.31658 6.68342 7.70711 6.29289L13 1"
                                stroke="#7D7D7E" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        </button>
                        
                        </div>
                        {show && <ul className={styles.profiledropdown}>
                        <li>my profile</li>
                        <li>add fund</li>
                        <li>api document</li>
                        <li ><Link to="/login" className={styles.logout}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20"
                                    fill="none">
                                    <path
                                        d="M8.25 0.999999C8.25 0.801088 8.32902 0.61032 8.46967 0.469669C8.61032 0.329017 8.80109 0.249999 9 0.249999L13 0.25C14.2593 0.251587 15.4666 0.752542 16.357 1.643C17.2475 2.53345 17.7484 3.74071 17.75 5L17.75 15C17.7484 16.2593 17.2475 17.4665 16.357 18.357C15.4665 19.2475 14.2593 19.7484 13 19.75L9 19.75C8.80109 19.75 8.61032 19.671 8.46967 19.5303C8.32902 19.3897 8.25 19.1989 8.25 19C8.25 18.8011 8.32902 18.6103 8.46967 18.4697C8.61032 18.329 8.80109 18.25 9 18.25L13 18.25C13.8616 18.2489 14.6877 17.9062 15.2969 17.2969C15.9062 16.6877 16.2489 15.8616 16.25 15L16.25 5C16.2489 4.13837 15.9062 3.31234 15.2969 2.70307C14.6877 2.09381 13.8616 1.75106 13 1.75L9 1.75C8.80109 1.75 8.61032 1.67098 8.46967 1.53033C8.32902 1.38968 8.25 1.19891 8.25 0.999999ZM0.47 10.53L4.47 14.53C4.53922 14.6016 4.622 14.6587 4.71353 14.698C4.80505 14.7372 4.90347 14.7579 5.00306 14.7587C5.10264 14.7595 5.20139 14.7405 5.29355 14.7027C5.3857 14.665 5.46941 14.6092 5.5398 14.5388C5.61018 14.4683 5.66583 14.3846 5.7035 14.2924C5.74117 14.2002 5.7601 14.1014 5.75919 14.0018C5.75827 13.9023 5.73754 13.8039 5.69819 13.7124C5.65884 13.6209 5.60167 13.5382 5.53 13.469L2.811 10.75L11 10.75C11.1989 10.75 11.3897 10.671 11.5303 10.5303C11.671 10.3897 11.75 10.1989 11.75 10C11.75 9.80109 11.671 9.61032 11.5303 9.46967C11.3897 9.32902 11.1989 9.25 11 9.25L2.811 9.25L5.53 6.53C5.66669 6.38861 5.74237 6.1992 5.74076 6.00255C5.73914 5.8059 5.66036 5.61775 5.52136 5.47863C5.38237 5.33951 5.1943 5.26054 4.99765 5.25874C4.80101 5.25694 4.61152 5.33244 4.47 5.469L0.47 9.469C0.400306 9.53865 0.345019 9.62135 0.307298 9.71238C0.269576 9.8034 0.250161 9.90097 0.250161 9.9995C0.250161 10.098 0.269576 10.1956 0.307298 10.2866C0.345019 10.3776 0.400306 10.4603 0.47 10.53Z"
                                        fill="#FF5E5E" />
                                </svg>
                            log out</Link></li>
                    </ul>
                        }
                        

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar