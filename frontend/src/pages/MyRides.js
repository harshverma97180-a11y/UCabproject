import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyRides = () => {
  const navigate = useNavigate();
  const rides = [
    { id: 1, date: '05-03-2026', from: 'Rohini', to: 'Connaught Place', fare: '$25', status: 'Completed' },
    { id: 2, date: '06-03-2026', from: 'Dwarka', to: 'IGI Airport', fare: '$45', status: 'Completed' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f4f7fe' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#fff', borderRight: '1px solid #ddd', padding: '20px' }}>
        <h2 style={{ color: '#0052cc', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/booking')}>Ucab</h2>
        <nav style={{ marginTop: '30px' }}>
          <div onClick={() => navigate('/booking')} style={{ padding: '12px 0', cursor: 'pointer' }}>🚕 Book a Ride</div>
          <div style={{ padding: '12px 0', cursor: 'pointer', color: '#0052cc', fontWeight: 'bold' }}>🚗 My Rides</div>
          <div onClick={() => navigate('/')} style={{ padding: '12px 0', cursor: 'pointer', color: 'red', marginTop: '50px' }}>🚪 Logout</div>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '40px' }}>
        <h3>Your Recent Rides</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden' }}>
          <thead>
            <tr style={{ backgroundColor: '#0052cc', color: 'white', textAlign: 'left' }}>
              <th style={{ padding: '15px' }}>Date</th>
              <th style={{ padding: '15px' }}>From</th>
              <th style={{ padding: '15px' }}>To</th>
              <th style={{ padding: '15px' }}>Fare</th>
              <th style={{ padding: '15px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {rides.map(ride => (
              <tr key={ride.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px' }}>{ride.date}</td>
                <td style={{ padding: '15px' }}>{ride.from}</td>
                <td style={{ padding: '15px' }}>{ride.to}</td>
                <td style={{ padding: '15px' }}>{ride.fare}</td>
                <td style={{ padding: '15px', color: 'green', fontWeight: 'bold' }}>{ride.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRides;