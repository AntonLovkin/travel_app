import Timer from './Timer';
import getDayOfWeek from '../getDayOfWeek';
import styles from './TodaysWeather.module.css';

const TodaysWeather = ({ data, startDateTrip = '', city }) => {
    
    const { datetime, temp, icon } = data
    let dayOfWeek = getDayOfWeek(Date.now());
 
    return (
        <div style={{ maxWidth: "40vw", fontSize: '1.2rem' }} className={styles.weatherCard}>
            <h3>Todays Weather</h3>
            <h3>{city}</h3>
            <h3>{dayOfWeek}</h3>
            <p>{datetime}</p>
            <p>{temp} deg</p>
            <p className={styles.icon}>{icon}</p>
            {startDateTrip && <div className={styles.timerContainer}>
                <Timer date={startDateTrip} />
            </div>}
        </div>
    )
}

export default TodaysWeather;