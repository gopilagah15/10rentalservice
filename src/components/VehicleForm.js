import React, { useState } from 'react';

const VehicleForm = ({ onAddVehicle }) => {
  const [vehicle, setVehicle] = useState({ id: Date.now(), type: '', model: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVehicle(vehicle);
    setVehicle({ id: Date.now(), type: '', model: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register Vehicle</h3>
      <input
        type="text"
        placeholder="Type (Car/Bike)"
        value={vehicle.type}
        onChange={(e) => setVehicle({ ...vehicle, type: e.target.value })}
      />
      <input
        type="text"
        placeholder="Model"
        value={vehicle.model}
        onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
      />
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default VehicleForm;
