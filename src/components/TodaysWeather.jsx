const TodaysWeather = ({data}) => {
    console.log(data)
    const { datetime, temp, icon} = data;
    return (
        <div style={{border: "2px solid white", borderRadius: "20px", padding: "10px", margin: "10px", cursor: "pointer", backgroundColor: "white"}}>
                <h3>Todays Weather</h3>
                <p>{datetime}</p>
                <p>{temp} deg</p>
                <p>{icon}</p>
              </div>
    )
};

export default TodaysWeather;