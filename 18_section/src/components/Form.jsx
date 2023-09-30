// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";

const convertToEmoji = (countryCode) => {
    const codePoints = countryCode
            .toUpperCase()
            .split("")
            .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
};

const flagEmojiToPng = (flag) => {
    const countryCode = 
        Array
            .from(flag, (codeUnit) => codeUnit.codePointAt())
            .map((char) => String.fromCharCode(char - 127397).toLowerCase())
            .join('');
    
    return (
        <img 
            src={`https://flagcdn.com/24x18/${countryCode}.png`} 
            alt={flag} 
        />
    );
};

const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

const Form = () => {
    const [lat, lng] = useUrlPosition();
    // console.log(lat, lng);
    const { createCity, isLoading } = useCities();
    const navigate = useNavigate();

    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
    const [cityName, setCityName] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [emoji, setEmoji] = useState('');
    const [geocodingError, setGeocodingError] = useState('');

    useEffect(() => {
        if (!lat && !lng) return;

        const fetchCityData = async () => {
            try {
                setIsLoadingGeocoding(true);
                setGeocodingError('');

                const response = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
                console.log(response);
                const data = await response.json();
                console.log(data);

                if (!data.countryCode) {
                    throw new Error(`That doesn't seem to be a city. Click somewhere else!`);
                };

                setCityName(data.city || data.locality || '');
                setCountry(data.countryName);
                setEmoji(convertToEmoji(data.countryCode));
            }
            catch (error) {
                console.error(error);
                setGeocodingError(error.message);
            }
            finally {
                setIsLoadingGeocoding(false);
            }
        };
        fetchCityData();
    }, [lat, lng]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!cityName || !date) return;

        const newCity = {
            cityName: cityName,
            country: country,
            emoji: emoji,
            date: date,
            notes: notes,
            position: {
                lat: lat, 
                lng: lng
            }
        };
        console.log(newCity);

        await createCity(newCity);
        navigate('/app');
    };

    if (isLoadingGeocoding) return (
        <Spinner />
    );

    if (!lat && !lng) return (
        <Message message='Start by clicking somewhere on the map!'/>
    );

    if (geocodingError) return (
        <Message message={geocodingError}/>
    );

    return (
      <form className={`${styles.form} ${isLoading ? styles.loading : ''}`} onSubmit={handleSubmit}>
          <div className={styles.row}>
              <label htmlFor="cityName">City name</label>
              <input
                  id="cityName"
                  onChange={(e) => setCityName(e.target.value)}
                  value={cityName}
              />
              <span className={styles.flag}>{emoji && flagEmojiToPng(emoji)}</span>
          </div>

          <div className={styles.row}>
              <label htmlFor="date">When did you go to {cityName}?</label>
              {/* <input
                  id="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
              /> */}
              <DatePicker 
                id="date"
                onChange={(date) => {
                    console.log(date);
                    setDate(date);
                }}
                selected={date}
                dateFormat='dd/MM/yyyy'
              />
          </div>

          <div className={styles.row}>
              <label htmlFor="notes">Notes about your trip to {cityName}</label>
              <textarea
                  id="notes"
                  onChange={(e) => setNotes(e.target.value)}
                  value={notes}
              />
          </div>

          <div className={styles.buttons}>
              <Button type='primary'>Add</Button>
              <BackButton />
          </div>
      </form>
    );
};

export default Form;