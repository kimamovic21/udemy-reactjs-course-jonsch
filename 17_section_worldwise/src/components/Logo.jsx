import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to='/'>
            <img 
                src="/logo.png" 
                alt="WorldWise logo" 
                className={styles.logo} 
            />
        </Link>
    );
};

export default Logo;