import React from "react";
import styles from "./CountryItem.module.css";

const CountryItem = ({ country }) => {
    // console.log(country);

    const flagEmojiToPNG = (flag) => {
        var countryCode = 
            Array
            .from(flag, (codeUnit) => codeUnit.codePointAt())
            .map((char) => String.fromCharCode(char - 127397).toLowerCase())
            .join("");
        
        return (
            <img 
                src={`https://flagcdn.com/24x18/${countryCode}.png`} 
                alt="flag" 
            />
        );
    };

    return (
        <li className={styles.countryItem}>
            <span>{flagEmojiToPNG(country.emoji)}</span>
            <span>{country.country}</span>
        </li>
    );
};

export default CountryItem;