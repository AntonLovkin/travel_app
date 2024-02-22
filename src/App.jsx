import { useState, useEffect } from 'react';

import './App.css';

import { tripsList } from "./tripsData";

import SearchTrip from './components/SearchTrip.jsx';
import TripList from './components/TripList.jsx';
import Modal from './components/Modal.jsx';
import DayWeather from './components/DayWeather.jsx';

import { getCityInfo, getTripInfo } from './api.js';
import TodaysWeather from './components/TodaysWeather.jsx';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState('');
  const [cityInfo, setCityInfo] = useState('');
  const [startDateTrip, setStartDateTrip] = useState('');
  const [tripWeatherInfo, setTripWeatherInfo] = useState(null);

  const [trips, setTrips] = useState(
    JSON.parse(localStorage.getItem('trips')) || tripsList || []
  );

  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem('trips'));
    if (trips) {
      setTrips(trips);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips));
  }, [trips]);

  const showAddModal = () => {
    setShowModal(!showModal);
  };
  
  const onSaveTripData = (data) => {
    setTrips((prevState) => [...prevState, data]);
  };
  
  const onTripClick = (city, startDate, endDate) => {
    console.log(city)
    searchCityInfo(city);
    setCity(city);

    if (!startDate) return;

    setStartDateTrip(startDate);
    
    getTripInfo(city, startDate, endDate)
      .then((data) => {
        console.log(data.days); 
        setTripWeatherInfo(data.days);
      })
      .catch((error) => {
        console.error('There was a problem with the request:', error);
      });
  };

  const searchCityInfo = (city) => {
    console.log(city)
    getCityInfo(city)
      .then((data) => {
        console.log(data)
        setCityInfo(data.days[0]);
      })
      .catch((error) => {
        console.error('There was a problem with the request:', error);
      });
  };
    
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ maxWidth: "60vw" }}>
          <SearchTrip
            clearCityInfo={setCityInfo}
            clearTripInfo={setTripWeatherInfo}
            searchCityInfo={onTripClick}
          />
          <TripList
            onTripClick={onTripClick}
            showAddModal={showAddModal}
          trips={trips}
          />
          {tripWeatherInfo &&
            <div>
              <h3>Trip Week Weather</h3>
              <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {tripWeatherInfo.map(info => <DayWeather data={info} />)}
              </ul>
            </div>}
        </div>
        {cityInfo && cityInfo &&
          <TodaysWeather data={cityInfo} date={startDateTrip} city={city} />
        }
      </div>
      {showModal && (
        <Modal
          onSave={onSaveTripData}
          onClose={showAddModal} />
      )}
    </>
  )
}

export default App;