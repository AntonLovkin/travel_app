import React, { useState, useEffect } from 'react';

const Timer = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState('');

  const calculateTimeLeft = () => {
    const difference = new Date(date) - new Date();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    } else {
      setTimeLeft('Timer expired');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div>
      <h3>Time to trip:</h3>
      <div>{timeLeft}</div>
    </div>
  );
};

export default Timer;
