import React from 'react';

const Receipt = ({ rentals }) => {
  const calculateFee = (rental) => {
    const ratePerHour = 10;
    return ratePerHour * rental.hours;
  };

  return (
    <div>
      <h3>Receipts</h3>
      <ul>
        {rentals.map((rental, index) => (
          <li key={index}>
            {rental.customer.name} rented {rental.vehicle.model} for {rental.hours} hours - Total Fee: ${calculateFee(rental)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Receipt;
