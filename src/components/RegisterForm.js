import React, { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User Registered!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Register</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" /><br />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" /><br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;