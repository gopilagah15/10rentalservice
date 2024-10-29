import React, { useState } from 'react';

const CustomerForm = ({ onAddCustomer }) => {
  const [customer, setCustomer] = useState({ id: Date.now(), name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCustomer(customer);
    setCustomer({ id: Date.now(), name: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register Customer</h3>
      <input
        type="text"
        placeholder="Customer Name"
        value={customer.name}
        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
      />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
