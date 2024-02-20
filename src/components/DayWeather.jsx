import getDayOfWeek from "../getDayOfWeek";

const DayWeather = ({data}) => {
    const { datetime, temp, icon} = data;
    const dayOfWeek = getDayOfWeek(datetime);

    return (
        <li style={{width:"200px", border: "2px solid white", borderRadius: "20px", padding: "10px", margin: "10px", cursor: "pointer"}}>
                <h3>{dayOfWeek}</h3>
                <p>{datetime}</p>
                <p>{temp}</p>
                <p>{icon}</p>
              </li>
    )
};

export default DayWeather;