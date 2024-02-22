import getDayOfWeek from "../getDayOfWeek";
import styles from './TodaysWeather.module.css';

const DayWeather = ({ data }) => {
    const { datetime, temp, icon } = data;
    const dayOfWeek = getDayOfWeek(datetime);
    // const url = `../icons/${icon}.svg`;
    // const image = require(`../path/to/images/${url}`);
    // const image = imageMap[icon];
    // console.log(image)

    return (
        <li className={styles.trip_weather_item}>
            {/* <img style={{ width: "100%", height: "100%" }} src="" alt="" /> */}
            <h3>{dayOfWeek}</h3>
            <p>{datetime}</p>
            <p>{temp} deg</p>
            <p>{icon}</p>
        </li>
    )
};

export default DayWeather;