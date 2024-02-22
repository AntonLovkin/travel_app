import styles from './TripList.module.css';

const Trip = ({ onClick, data }) => {
  const { city, startDate, endDate, image } = data;

  return (
    <li className={styles.trip_item}
      onClick={() => onClick(city, startDate, endDate)}>
      <div>
        <img src={image} alt='city_image' />
      </div>
      <h3>{city}</h3>
      <p>
        from {startDate} to {endDate}
      </p>
    </li>
  )
}

export default Trip;