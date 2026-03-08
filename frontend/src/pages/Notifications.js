import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
    const navigate = useNavigate();

    // Mock data for initial UI setup
    const notifications = [
        { id: 1, message: "Your ride with John D. has been confirmed!", time: "2 mins ago" },
        { id: 2, message: "Driver is 5 mins away from your location.", time: "10 mins ago" },
        { id: 3, message: "Welcome to UCab! Enjoy your first ride.", time: "1 day ago" }
    ];

    // Reuse the styling from your Booking.js for consistency
    const sidebarStyle = {
        width: '250px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRight: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    };

    const navItemStyle = {
        padding: '12px 15px',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'background 0.3s',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: '#555'
    };

    const activeNavItemStyle = {
        ...navItemStyle,
        backgroundColor: '#e7f0ff',
        color: '#007bff',
        fontWeight: 'bold'
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f7f6' }}>
            {/* Sidebar Navigation - Keeping it consistent with other pages */}
            <aside style={{ 
    width: '250px', // Fixed width to match Support page
    backgroundColor: '#fff', 
    padding: '20px', 
    borderRight: '1px solid #eee', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px',
    minHeight: '100vh' // Ensures it covers full height like others
}}>
    <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    marginBottom: '35px',
    paddingLeft: '5px' 
}}>
    <img 
        src="/modern-car.png" 
        alt="Ucab Logo" 
        style={{ width: '85px', height: 'auto' }} 
    />
    <h2 style={{ 
        color: '#4169E1', 
        margin: 0, 
        fontSize: '42px', 
        fontWeight: 'bold' 
    }}>
        Ucab
    </h2>
</div>
    
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div onClick={() => navigate('/profile')} style={navItemStyle}>👤 Profile</div>
        <div onClick={() => navigate('/booking')} style={navItemStyle}>🚗 Book a Ride</div>
        <div onClick={() => navigate('/payments')} style={navItemStyle}>💳 Payments</div>
        
        {/* Active state for Notifications */}
        <div onClick={() => navigate('/notifications')} style={activeNavItemStyle}>
            🔔 Notifications
        </div>

        <div onClick={() => navigate('/support')} style={navItemStyle}>⚙️ Support</div>
    </nav>
</aside>

            {/* Main Content Area */}
            <main style={{ flex: 1, padding: '40px' }}>
                <h2 style={{ marginBottom: '25px', color: '#333' }}>Notifications 🔔</h2>
                
                <div style={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '12px', 
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    overflow: 'hidden'
                }}>
                    {notifications.length > 0 ? (
                        notifications.map((note) => (
                            <div key={note.id} style={{ 
                                padding: '20px', 
                                borderBottom: '1px solid #f0f0f0',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <span style={{ color: '#444', fontSize: '15px' }}>{note.message}</span>
                                <span style={{ color: '#999', fontSize: '12px' }}>{note.time}</span>
                            </div>
                        ))
                    ) : (
                        <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>
                            No new notifications.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Notifications;