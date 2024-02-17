import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Modal from './components/Modal.jsx';
import Trip from './components/Trip.jsx';
import DayWeather from './components/DayWeather.jsx';

const API_KEY = 'XM9YG9VGNME7QHFXDNCCMDYFU';
const tripsList = [
  { city: 'Kyiv', startDate: '2024-03-06', endDate: '2024-03-09' },
  { city: 'Tokio', startDate: '2024-03-06', endDate: '2024-03-09' },
];

function App() {
  const [city, setCity] = useState('');
  const [info, setInfo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [tripsFromLocalstorage, setTripsFromLocalstorage] = useState(
    JSON.parse(localStorage.getItem('trips')) || tripsList || []
  );
  const [tripWeatherInfo, setTripWeatherInfo] = useState(null);

  useEffect(() => {
    const trips = JSON.parse(localStorage.getItem('trips'));
    console.log(trips);
    if (trips) {
      setTripsFromLocalstorage(trips);
    }
  }, []);

  useEffect(() => {
    console.log(tripsFromLocalstorage);
    localStorage.setItem('trips', JSON.stringify(tripsFromLocalstorage));
  }, [tripsFromLocalstorage]);

  const onInputText = (event) => {
    // console.log(event.target.value);
    setCity(event.target.value.toLowerCase());
  };

  const onSearchBtnClick = (event) => {
    event.preventDefault();
    // console.log(city);
    if (city.trim() === '') return;

    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        setInfo(
          `Weather temp in ${data.resolvedAddress}: ${data.days[0].temp} градуси за Цельсієм`
        );
      })
      .catch((error) => {
        setInfo(`There is no such city like ${city}, try English.`);
        // console.error('There was a problem with the request:', error);
      });
  };

  const onAddTripBtnClick = () => {
    setShowModal(!showModal);
  };

  const onSaveTripData = (data) => {
    console.log(data);
    setTripsFromLocalstorage((prevState) => [...prevState, data]);
    console.log(tripsFromLocalstorage);
  };

  const onTripClick = (city, startDate, endDate) => {
    console.log(city, startDate, endDate);
    console.log("click");
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.days)
        setTripWeatherInfo(data.days);
      })
      .catch((error) => {
        // setInfo(`There is no such city like ${city}, try English.`);
        // console.error('There was a problem with the request:', error);
      });
  };

  return (
    <>
      <div>
        <h2>Wheather forecast</h2>
        <input onInput={onInputText} type="text" />
        <button onClick={onSearchBtnClick}>Search</button>
        <p>{info}</p>
      </div>
      <div>
        <h2>List of Trips</h2>
        <ul>
          {/* {tripsFromLocalstorage.length > 0 &&
            tripsFromLocalstorage.map(({ city, startDate, endDate }) => (
              <li>
                <h3>{city}</h3>
                <p>
                  from {startDate} to {endDate}
                </p>
              </li>
            ))} */}
            {tripsFromLocalstorage.length > 0 &&
            tripsFromLocalstorage.map(data => <Trip onClick={onTripClick} data={data}/>)}
          <li>
            <button onClick={onAddTripBtnClick}>Add trip</button>
          </li>
        </ul>
      </div>
      <div>
        <ul>
        {tripWeatherInfo && tripWeatherInfo.map(info => <DayWeather data={info} />)}
        </ul>
      </div>
      {showModal && (
        <Modal onSave={onSaveTripData} onClose={onAddTripBtnClick} />
      )}
    </>
  );
}

export default App;

{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}

// const [count, setCount] = useState(0)
