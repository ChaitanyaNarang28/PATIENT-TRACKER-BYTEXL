import { useState } from 'react';

function AppointmentForm() {
  const [form, setForm] = useState({ doctor: '', date: '', time: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Book Appointment</h2>
      <select name="doctor" value={form.doctor} onChange={handleChange}>
  <option value="">Select a doctor</option>
  <option value="Dr. Smith">Dr. Chaitanya</option>
  <option value="Dr. Mehta">Dr. Mehta</option>
  <option value="Dr. Patel">Dr. Patel</option>
</select>

      <input type="date" name="date" value={form.date} onChange={handleChange} /><br />
      <input type="time" name="time" value={form.time} onChange={handleChange} /><br />
      <button type="submit">Book</button>
    </form>
  );
}

export default AppointmentForm;