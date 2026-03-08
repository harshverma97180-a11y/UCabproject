import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import MyRides from './pages/MyRides';
import Profile from './pages/Profile'; 
import Payments from './pages/Payments';
import Support from './pages/Support';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3 shadow">
          <Link className="navbar-brand fw-bold" to="/">Ucab</Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link text-white" to="/login">Login</Link>
            <Link className="nav-link text-white" to="/register">Register</Link>
            
          </div>
          
        </nav>

        {/* Dynamic Content */}
        <div className="container-fluid p-0">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/rides" element={<MyRides />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/support" element={<Support />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;