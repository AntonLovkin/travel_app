const Trip = ({onClick, data}) => {
    // console.log(data)
  const { city, startDate, endDate } = data;

  return (
    <li 
      style={{
        display: 'flex', flexDirection: "column", alignItems: 'center',
        border: "2px solid white", borderRadius: "20px",
         margin: "10px", cursor: "pointer",
        width: '250px', height: '150px'
      }}
      onClick={() => onClick(city, startDate, endDate)}>
      <h3>{city}</h3>
      <p>
        from {startDate} to {endDate}
      </p>
    </li>
  )
};

export default Trip;