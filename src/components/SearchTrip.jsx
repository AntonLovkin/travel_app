import { useState, useEffect } from 'react';

import { API_KEY, URL } from '../variables';

function SearchTrip() {
    const [city, setCity] = useState('');
    const [info, setInfo] = useState('');
    const [cityInfo, setCityInfo] = useState('');

    const onInputText = (event) => {
        // console.log(event.target.value);
        setCity(event.target.value.toLowerCase());
    };

    const onSearchBtnClick = (event) => {
        event.preventDefault();
        // console.log(city);
        if (city.trim() === '') return;

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
                console.log(data)
                setCityInfo(data);
                setInfo(
                    `Weather temp in ${data.resolvedAddress}: ${data.days[0].temp} градуси за Цельсієм`
                );
            })
            .catch((error) => {
                setInfo(`There is no such city like ${city}, try English.`);
                // console.error('There was a problem with the request:', error);
            });
    };
    
    return (
        <div>
            <h2>Wheather forecast</h2>
            <input onInput={onInputText} type="text" />
            <button onClick={onSearchBtnClick}>Search</button>
            <p>{info}</p>
        </div>
    )
}

export default SearchTrip;