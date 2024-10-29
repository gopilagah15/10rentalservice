import React, { useState } from 'react';
import VehicleForm from './components/VehicleForm';
import CustomerForm from './components/CustomerForm';
import RentalPopup from './components/RentalPopup';
import Receipt from './components/Receipt';
import Report from './components/Report';
 

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [selectedRental, setSelectedRental] = useState(null);
  const [showRentalPopup, setShowRentalPopup] = useState(false);

  // Add new vehicle
  const handleAddVehicle = (vehicle) => {
    setVehicles([...vehicles, vehicle]);
  };

  // Add new customer
  const handleAddCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  // Start a rental
  const handleStartRental = (customer, vehicle) => {
    setSelectedRental({ customer, vehicle });
    setShowRentalPopup(true);
  };

  // Complete a rental
  const handleCompleteRental = (rentalDetails) => {
    setRentals([...rentals, rentalDetails]);
    setShowRentalPopup(false);
  };

  return (
    <div>
      <h2>Rental Service Management System</h2>
      <VehicleForm onAddVehicle={handleAddVehicle} />
      <CustomerForm onAddCustomer={handleAddCustomer} />

      <h3>Available Vehicles</h3>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.type} - {vehicle.model}
            <button onClick={() => handleStartRental(customers[0], vehicle)}>
              Rent Now
            </button>
          </li>
        ))}
      </ul>

      {showRentalPopup && selectedRental && (
        <RentalPopup
          rental={selectedRental}
          onCompleteRental={handleCompleteRental}
        />
      )}

      <Receipt rentals={rentals} />
      <Report rentals={rentals} />
    </div>
  );
};

export default App;
