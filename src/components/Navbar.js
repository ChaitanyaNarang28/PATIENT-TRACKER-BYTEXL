import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: 'black' }}>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/book">Book Appointment</Link> |{" "}
      <Link to="/prescriptions">Prescriptions</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;