import React from 'react';
import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';

const CityItem = ({ city }) => {
    console.log(city);

    const { cityName, emoji, date, id, position } = city;
    console.log(cityName, emoji, date, id, position);

    const formatDate = (date) => {
        const options = {
            day: "numeric",
            month: "long",
            year: "numeric",
        };
        return new Intl.DateTimeFormat("en", options).format(new Date(date));
    };

    const flagEmojiToPNG = (flag) => {
        let countryCode = 
            Array
                .from(flag, (codeUnit) => codeUnit.codePointAt())
                .map(char => String.fromCharCode(char-127397)
                .toLowerCase())
                .join('');
        return (
            <img 
                src={`https://flagcdn.com/24x18/${countryCode}.png`} 
                alt='flag' 
            />
        );
    };

    return (
        <li>
            <Link 
                className={styles.cityItem} 
                to={`${id}?lat=${position.lat}&lng=${position.lng}`}
            >
                <span className={styles.emoji}>{flagEmojiToPNG(emoji)}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <p className={styles.date}>({formatDate(date)})</p>
                <button className={styles.deleteBtn}>X</button>
            </Link>
        </li> 
    );
};

export default CityItem;