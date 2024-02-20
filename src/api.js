import { API_KEY, URL } from "./variables";

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
        // .catch((error) => {
        //     console.error('There was a problem with the request:', error);
        // });
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
    // .catch((error) => {
    //     console.error('There was a problem with the request:', error);
    // });
};
