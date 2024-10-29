import React from 'react';

const Report = ({ rentals }) => {
  const totalRevenue = rentals.reduce((sum, rental) => sum + rental.hours * 10, 0);
  const utilization = rentals.length;

  return (
    <div>
      <h3>Rental Report</h3>
      <p>Total Revenue: ${totalRevenue}</p>
      <p>Total Rentals: {utilization}</p>
    </div>
  );
};

export default Report;
