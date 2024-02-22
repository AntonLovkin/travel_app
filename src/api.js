import { API_KEY, URL } from "./variables";

export const fetchCityImage = (city) => {
    const url = `https://api.unsplash.com/search/photos?query=${city}&client_id=${API_KEY}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
      .then(data => {
            return data.results[0].urls.small;
        })
        .catch(error => {
            console.error('There was a problem with the request:', error);
        });
};
  
export const getCityInfo = (city) => {
    return fetch(
        `${URL}/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
};

export const getTripInfo = (city, startDate, endDate) => {
    return fetch(
        `${URL}/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
};
