import Timer from './Timer';
import getDayOfWeek from '../getDayOfWeek';

const TodaysWeather = ({data, date}) => {
    // console.log(date)
    const { datetime, temp, icon} = data;
    const dayOfWeek = getDayOfWeek(datetime);
    return (
        <div style={{border: "2px solid white", borderRadius: "20px", padding: "10px", margin: "10px", cursor: "pointer", backgroundColor: "white"}}>
                <h3>Todays Weather</h3>
                <h3>{dayOfWeek}</h3>
                <p>{datetime}</p>
                <p>{temp} deg</p>
                <p>{icon}</p>
                <Timer date={date}/>
              </div>
    )
};

export default TodaysWeather;