import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AppointmentForm from './components/AppointmentForm';
import PrescriptionViewer from './components/PrescriptionViewer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/book" element={<AppointmentForm />} />
        <Route path="/prescriptions" element={<PrescriptionViewer />} />
      </Routes>
    </>
  );
}

export default App;