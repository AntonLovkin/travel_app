import { useState } from 'react';

import Timer from './Timer';
import styles from './SearchTrip.module.css';
import { API_KEY, URL } from '../variables';
import getDayOfWeek from '../getDayOfWeek';

function SearchTrip() {
    const [city, setCity] = useState('');
    const [info, setInfo] = useState('');
    const [cityInfo, setCityInfo] = useState('');

    const dayOfWeek =cityInfo && getDayOfWeek(cityInfo.days[0].datetime);

    const onInputText = (event) => {
        // console.log(event.target.value);
        setCity(event.target.value.toLowerCase());
    };

    const onSearchBtnClick = (event) => {
        event.preventDefault();
        // console.log(city);
        if (city.trim() === '') {
            setInfo('');
            return
        };

        fetch(
            `${URL}/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data) // get todays weather for the city
                setCityInfo(data);
                setInfo('');
            })
            .catch((error) => {
                setCityInfo('');
                setInfo(`There is no such city like ${city}, try another city.`);
                // console.error('There was a problem with the request:', error);
            });
    };
    
    return (
        <form onSubmit={onSearchBtnClick}>
            <h2>Weather forecast</h2>
            <input className={styles.inputText} onInput={onInputText} type="text" />
            <button className={styles.searchButton} onClick={onSearchBtnClick}>Search</button>
            {cityInfo && <div className={styles.weatherInfo}>
                <p>{dayOfWeek}</p>
                <p>{cityInfo.days[0].icon} {cityInfo.days[0].temp} deg</p>
                <p>{cityInfo.resolvedAddress}</p>
            </div>}
            {info && <p className={styles.weatherInfo}>{info}</p>}
        </form>
    )
}

export default SearchTrip;