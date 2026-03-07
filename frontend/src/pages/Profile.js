import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: 'auto', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginTop: '50px' }}>
      <h2 style={{ color: '#0052cc', marginBottom: '20px' }}>My Profile</h2>
      <div style={{ textAlign: 'left', lineHeight: '2' }}>
        <p><b>Name:</b> Harsh Verma</p>
        <p><b>Email:</b> harshverma97180@gmail.com</p>
        <p><b>Member Since:</b> March 2026</p>
      </div>
      <button 
        onClick={() => navigate('/booking')}
        style={{ marginTop: '30px', padding: '10px 20px', backgroundColor: '#0052cc', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Profile;