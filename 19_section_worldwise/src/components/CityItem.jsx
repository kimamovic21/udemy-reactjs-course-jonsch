import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';

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

const CityItem = ({ city }) => {
    // console.log(city);

    const { currentCity, deleteCity } = useCities();
    // console.log(currentCity);

    const { cityName, emoji, date, id, position } = city;
    // console.log(cityName, emoji, date, id, position);

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Delete button');

        deleteCity(id);
    };

    return (
        <li>
            <Link 
                className={`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active'] : ''}`} 
                to={`${id}?lat=${position.lat}&lng=${position.lng}`}
            >
                <span className={styles.emoji}>{flagEmojiToPNG(emoji)}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <p className={styles.date}>({formatDate(date)})</p>
                <button 
                    className={styles.deleteBtn} 
                    onClick={handleClick}
                >
                    X
                </button>
            </Link>
        </li> 
    );
};

export default CityItem;