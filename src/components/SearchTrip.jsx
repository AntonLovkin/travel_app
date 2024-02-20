import { useState } from 'react';

import styles from './SearchTrip.module.css';

function SearchTrip({clearCityInfo, clearTripInfo, searchCityInfo}) {
    const [city, setCity] = useState('');
    const onInputText = (event) => {
        setCity(event.target.value.toLowerCase());
    };

    const onSearchBtnClick = (event) => {
        event.preventDefault();

        clearTripInfo(null);
        clearCityInfo('');

        if (city.trim() === '') return;
                
        searchCityInfo(city);
    };
    
    return (
        <form onSubmit={onSearchBtnClick}>
            <h2>Weather forecast</h2>
            <input className={styles.inputText} onInput={onInputText} type="text" />
            <button className={styles.searchButton} onClick={onSearchBtnClick}>Search</button>
            {/* {cityInfo && <div className={styles.weatherInfo}>
                <p>{dayOfWeek}</p>
                <p>{cityInfo.days[0].icon} {cityInfo.days[0].temp} deg</p>
                <p>{cityInfo.resolvedAddress}</p>
            </div>} */}
            {/* {info && <p className={styles.weatherInfo}>{info}</p>} */}
        </form>
    )
}

export default SearchTrip;