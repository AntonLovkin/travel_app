import styles from './TripList.module.css';
import Trip from "./Trip"

function TripList({ onTripClick, showAddModal, trips }) {

    return (
        <div >
            <h2>List of Trips</h2>
            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {trips.length > 0 &&
                    trips.map(trip =>
                        <Trip onClick={onTripClick} data={trip} />)}
                <li>
                    <button
                        className={styles.button_add}
                        onClick={showAddModal}
                    >
                        Add trip
                    </button></li>
            </ul>
        </div>
    );
}

export default TripList