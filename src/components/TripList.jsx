import { useState, useEffect } from 'react';

import Trip from "./Trip"

import { tripsList } from "../tripsData";

function TripList({ onTripClick, showAddModal }) {
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

    return (
        <div>
            <h2>List of Trips</h2>
            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {trips.length > 0 &&
                    trips.map(trip =>
                        <Trip onClick={onTripClick} data={trip} />)}
                <li><button
                    style={{
                        border: "2px solid white", borderRadius: "20px",
                        padding: "10px", margin: "10px", cursor: "pointer",
                        width: '250px', height: '150px'
                    }}
                    onClick={showAddModal}
                >
                    <style>{`button:hover {background-color: tomato;}`}</style>
                    Add trip
                </button></li>
            </ul>
        </div>
    );
}

export default TripList