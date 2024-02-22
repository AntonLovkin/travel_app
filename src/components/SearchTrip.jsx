import { useState } from 'react';

import styles from './SearchTrip.module.css';
import { fetchCityImage } from '../api';

function SearchTrip({clearCityInfo, clearTripInfo, searchCityInfo}) {
    const [city, setCity] = useState('');
    const onInputText = (event) => {
        setCity(event.target.value.toLowerCase());
    };

    const onSearchBtnClick = (event) => {
        event.preventDefault();

        clearTripInfo(null);
        clearCityInfo('');

        fetchCityImage(city)
            .then((url) => {
                console.log(url);
            })
            .catch((error) => {
                console.error('There was a problem with the request:', error);
            });
        
        if (city.trim() === '') return;
                
        searchCityInfo(city);
    };
    
    return (
        <form onSubmit={onSearchBtnClick}>
            <h2>Weather forecast</h2>
            <input className={styles.inputText} onInput={onInputText} type="text" />
            <button className={styles.searchButton} onClick={onSearchBtnClick}>Search</button>
        </form>
    )
}

export default SearchTrip;