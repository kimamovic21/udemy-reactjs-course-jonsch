import styles from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';
import { useCities } from '../contexts/CitiesContext';

const CountryList = () => {
    const { cities, isLoading } = useCities();
    console.log(cities, isLoading);

    if (isLoading) {
        return (
            <Spinner />
        );
    }

    const countries = cities.reduce((array, city) => {  // (acc, cur)
    //    console.log(array, city);
    
       if (!array.map((element) => {
               return element.country;
            })
            .includes(city.country)) {
                return [
                    ...array, {
                        country: city.country, 
                        emoji: city.emoji
                    }
                ];
            }
        else return array;
    }, []);

    if (!cities.length) {
        return (
            <Message message='Add your first city by clicking on a city on the map'/>
        );
    }

    return (
        <ul className={styles.countryList}>
            {countries?.map((country) => {
                // console.log(country);
                return (
                    <CountryItem 
                        key={country.country} 
                        country={country}
                    />
                )
            })}
        </ul>
    );
};

export default CountryList;