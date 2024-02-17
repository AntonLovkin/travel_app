const DayWeather = ({data}) => {
    // console.log(data)
    const { datetime, temp, icon} = data;
    return (
        <li style={{border: "2px solid white", borderRadius: "20px", padding: "10px", margin: "10px", cursor: "pointer"}}>
                <h3>{datetime}</h3>
                <p>{temp}</p>
                <p>{icon}</p>
              </li>
            //   <p>Hello</p>
    )
};

export default DayWeather;