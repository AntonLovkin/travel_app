import { useState, useEffect } from 'react';

import Trip from "./Trip"
import { tripsList } from "../tripsData";

function TripList({onTripClick, onAddTripBtnClick}) {
    const [tripsFromLocalstorage, setTripsFromLocalstorage] = useState(
        JSON.parse(localStorage.getItem('trips')) || tripsList || []
    );

    useEffect(() => {
        const trips = JSON.parse(localStorage.getItem('trips'));
        // console.log(trips);
        if (trips) {
            setTripsFromLocalstorage(trips);
        }
    }, []);

    useEffect(() => {
        // console.log(tripsFromLocalstorage);
        localStorage.setItem('trips', JSON.stringify(tripsFromLocalstorage));
    }, [tripsFromLocalstorage]);
    
    
    return (
        <div>
            <h2>List of Trips</h2>
            <ul>
                {tripsFromLocalstorage.length > 0 &&
                    tripsFromLocalstorage.map(data => <Trip onClick={onTripClick} data={data} />)}
                <li>
                    <button onClick={onAddTripBtnClick}>Add trip</button>
                </li>
            </ul>
        </div>
    );
}

export default TripList