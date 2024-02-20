import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ onClose, onSave }) => {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSave = () => {
    if (city.trim() === '' || startDate === '' || endDate === '') return;
    onSave({ id: Math.random().toFixed(5), city, startDate, endDate });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 className='modal-header'>Create Trip</h2>
          <h2>Select City</h2>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Select a city</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
          </select>
          <h2>Start Date</h2>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <h2>End Date</h2>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <div className="button-container">
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
