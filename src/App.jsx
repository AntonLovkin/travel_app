import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Modal from './components/Modal.jsx';
// import Trip from './components/Trip.jsx';
import DayWeather from './components/DayWeather.jsx';
import TodaysWeather from './components/TodaysWeather.jsx';
import SearchTrip from './components/SearchTrip.jsx';
import TripList from './components/TripList.jsx';

import { API_KEY, URL } from './variables.js';

function App() {
  const [cityInfo, setCityInfo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [tripsFromLocalstorage, setTripsFromLocalstorage] = useState(
    JSON.parse(localStorage.getItem('trips')) || tripsList || []
  );
  const [tripWeatherInfo, setTripWeatherInfo] = useState(null);
  const [startDateTrip, setStartDateTrip] = useState('');

  const onAddTripBtnClick = () => {
    setShowModal(!showModal);
  };

  const onSaveTripData = (data) => {
    // console.log(data);
    setTripsFromLocalstorage((prevState) => [...prevState, data]);
    // console.log(tripsFromLocalstorage);
  };

  const searchCityInfo = (city) => {
    // console.log(city);

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
        // console.log(data.days[0])
        setCityInfo(data.days[0]);
      })
      .catch((error) => {
        console.error('There was a problem with the request:', error);
      });
  };

  const onTripClick = (city, startDate, endDate) => {
    // console.log(city, startDate, endDate);
    searchCityInfo(city);
    setStartDateTrip(startDate);
    fetch(
      `${URL}/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTripWeatherInfo(data.days);
      })
      .catch((error) => {
        console.error('There was a problem with the request:', error);
      });
  };

  const data = () => {
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
        // setCityInfo(data.days[0]);
      })
      .catch((error) => {
        console.error('There was a problem with the request:', error);
      });
  };

  return (
    <>
      <SearchTrip />
      <TripList
        onTripClick={onTripClick}
        onAddTripBtnClick={onAddTripBtnClick}
      />
      <div>
        <ul>
          {tripWeatherInfo && tripWeatherInfo.map(info => <DayWeather data={info} />)}
        </ul>
      </div>
      {cityInfo && startDateTrip && (
        <TodaysWeather data={cityInfo} date={startDateTrip} />
      )}
      {showModal && (
        <Modal onSave={onSaveTripData} onClose={onAddTripBtnClick} />
      )}
      <button onClick={data}>Click</button>
    </>
  );
}

export default App;
