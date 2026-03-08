// Support.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate = useNavigate();

    return (
        <div style={containerStyle}>
            <aside style={sidebarStyle}>
                {/* <h1 style={logoStyle}>Ucab</h1> */}
                <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    marginBottom: '35px',
    paddingLeft: '5px' 
}}>
    {/* Car logo on the left to match Booking page style */}
    <img 
        src="/modern-car.png" 
        alt="Ucab Logo" 
        style={{ width: '85px', height: 'auto' }} 
    />
    {/* Brand name displayed next to the logo */}
    <h2 style={{ 
        color: '#007bff', 
        margin: 0, 
        fontSize: '42px', 
        fontWeight: 'bold' 
    }}>
        Ucab
    </h2>
</div>
                <nav style={{ flex: 1 }}>
                    <div onClick={() => navigate('/profile')} style={navItemStyle}>👤 Profile</div>
                    <div onClick={() => navigate('/booking')} style={navItemStyle}>🚗 Book a Ride</div>
                    <div onClick={() => navigate('/payments')} style={navItemStyle}>💳 Payments</div>
                    <div onClick={() => navigate('/notifications')} style={navItemStyle}>🔔 Notifications</div>
                    <div onClick={() => navigate('/support')} style={activeNavItemStyle}>⚙️ Support</div>
                </nav>
            </aside>

            <main style={mainAreaStyle}>
                <h2 style={{ marginBottom: '30px' }}>Help & Support</h2>
                
                <div style={cardStyle}>
                    <h4>Contact Us</h4>
                    <p>📧 Email: support@ucab.com</p>
                    <p>📞 Phone: +1 800-UCAB-HELP</p>
                </div>

                <div style={cardStyle}>
                    <h4>Common Issues</h4>
                    <ul style={{ lineHeight: '2' }}>
                        <li style={{ cursor: 'pointer', color: '#0052cc' }}>How to cancel a ride?</li>
                        <li style={{ cursor: 'pointer', color: '#0052cc' }}>Payment failed issues</li>
                        <li style={{ cursor: 'pointer', color: '#0052cc' }}>Forgot items in cab</li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

// (Same styles as above used for consistency)
const containerStyle = { display: 'flex', height: '100vh', backgroundColor: '#f8f9fc' };
const sidebarStyle = { width: '280px', backgroundColor: '#fff', padding: '40px 24px', borderRight: '1px solid #edf2f7' };
const logoStyle = { color: '#0052cc', fontSize: '32px', fontWeight: '800', marginBottom: '50px' };
const navItemStyle = { padding: '14px 16px', cursor: 'pointer', borderRadius: '8px', color: '#64748b', marginBottom: '8px' };
const activeNavItemStyle = { ...navItemStyle, backgroundColor: '#f0f7ff', color: '#0052cc', fontWeight: '600' };
const mainAreaStyle = { flex: 1, padding: '40px' };
const cardStyle = { backgroundColor: '#fff', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginBottom: '25px' };

export default Support;