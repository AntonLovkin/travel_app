const Trip = ({onClick, data}) => {
    // console.log(data)
    const { city, startDate, endDate } = data;
    return (
        <li onClick={() => onClick(city, startDate, endDate)} style={{border: "2px solid white", borderRadius: "20px", padding: "10px", margin: "10px", cursor: "pointer"}}>
                <h3>{city}</h3>
                <p>
                  from {startDate} to {endDate}
                </p>
              </li>
    )
};

export default Trip;