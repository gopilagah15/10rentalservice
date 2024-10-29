import React, { useState } from 'react';

const RentalPopup = ({ rental, onCompleteRental }) => {
  const [pickupTime, setPickupTime] = useState('');
  const [returnTime, setReturnTime] = useState('');

  const handleSubmit = () => {
    const rentalDetails = {
      ...rental,
      pickupTime,
      returnTime,
      hours: (new Date(returnTime) - new Date(pickupTime)) / (1000 * 60 * 60),
    };
    onCompleteRental(rentalDetails);
  };

  return (
    <div>
      <h3>Pickup and Return Time</h3>
      <input
        type="datetime-local"
        value={pickupTime}
        onChange={(e) => setPickupTime(e.target.value)}
      />
      <input
        type="datetime-local"
        value={returnTime}
        onChange={(e) => setReturnTime(e.target.value)}
      />
      <button onClick={handleSubmit}>Complete Rental</button>
    </div>
  );
};

export default RentalPopup;
