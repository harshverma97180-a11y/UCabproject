// Payments.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payments = () => {
    const navigate = useNavigate();

    return (
        <div style={containerStyle}>
            <aside style={sidebarStyle}>
                <h1 style={logoStyle}>Ucab</h1>
                <nav style={{ flex: 1 }}>
                    <div onClick={() => navigate('/profile')} style={navItemStyle}>👤 Profile</div>
                    <div onClick={() => navigate('/booking')} style={navItemStyle}>🚗 Book a Ride</div>
                    <div onClick={() => navigate('/payments')} style={activeNavItemStyle}>💳 Payments</div>
                    <div onClick={() => navigate('/support')} style={navItemStyle}>⚙️ Support</div>
                </nav>
            </aside>

            <main style={mainAreaStyle}>
                <h2 style={{ marginBottom: '30px' }}>Payment Methods</h2>
                
                <div style={cardStyle}>
                    <h4>Saved Cards</h4>
                    <div style={paymentItem}>
                        <span>💳 **** **** **** 1234</span>
                        <span style={tagStyle}>Primary</span>
                    </div>
                    <button style={addBtnStyle}>+ Add New Card</button>
                </div>

                <div style={cardStyle}>
                    <h4>Transaction History</h4>
                    <p style={{ color: '#64748b' }}>No recent transactions found.</p>
                </div>
            </main>
        </div>
    );
};

// Reuse your existing styles or use these:
const containerStyle = { display: 'flex', height: '100vh', backgroundColor: '#f8f9fc' };
const sidebarStyle = { width: '280px', backgroundColor: '#fff', padding: '40px 24px', borderRight: '1px solid #edf2f7' };
const logoStyle = { color: '#0052cc', fontSize: '32px', fontWeight: '800', marginBottom: '50px' };
const navItemStyle = { padding: '14px 16px', cursor: 'pointer', borderRadius: '8px', color: '#64748b', marginBottom: '8px' };
const activeNavItemStyle = { ...navItemStyle, backgroundColor: '#f0f7ff', color: '#0052cc', fontWeight: '600' };
const mainAreaStyle = { flex: 1, padding: '40px' };
const cardStyle = { backgroundColor: '#fff', padding: '25px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginBottom: '25px' };
const paymentItem = { display: 'flex', justifyContent: 'space-between', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '10px', marginTop: '15px' };
const tagStyle = { backgroundColor: '#e1effe', color: '#1e42af', padding: '2px 8px', borderRadius: '4px', fontSize: '12px' };
const addBtnStyle = { marginTop: '20px', padding: '10px 20px', backgroundColor: '#0052cc', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' };

export default Payments;