import React from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();
  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      {user ? (
        <p>Welcome, {user.name}! You have upcoming appointments.</p>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}
    </div>
  );
}

export default Dashboard;