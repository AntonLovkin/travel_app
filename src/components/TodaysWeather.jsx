import Timer from './Timer';
import getDayOfWeek from '../getDayOfWeek';
import styles from './TodaysWeather.module.css';

const TodaysWeather = ({ data, date, city }) => {
    
    const { datetime, temp, icon } = data
    let dayOfWeek = null;
    if (date) {
        dayOfWeek = getDayOfWeek(datetime);
    }

    return (
        <div style={{ maxWidth: "40vw", fontSize: '1.2rem' }} className={styles.weatherCard}>
            <h3>Todays Weather</h3>
            <h3>{city}</h3>
            <h3>{dayOfWeek}</h3>
            <p>{datetime}</p>
            <p>{temp} deg</p>
            <p className={styles.icon}>{icon}</p>
            {dayOfWeek && <div className={styles.timerContainer}>
                <Timer date={date} />
            </div>}
        </div>
    )
}

export default TodaysWeather;