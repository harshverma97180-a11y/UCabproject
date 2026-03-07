import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({
        pickup: '',
        destination: '',
        cabType: 'Mini',
        fare: 25
    });

    // Handle the ride confirmation process
    const handleConfirmBooking = async () => {
        if (!bookingDetails.pickup || !bookingDetails.destination) {
            alert("Please enter both pickup and destination addresses.");
            return;
        }

        setIsLoading(true);
        try {
            // Integrating with Backend API
            // Note: passengerId should ideally come from your Auth context/state
            await axios.post('http://localhost:5000/api/ride/request', {
                pickupLocation: bookingDetails.pickup,
                dropLocation: bookingDetails.destination,
                fare: bookingDetails.fare,
                passengerId: "65e8f1a2b3c4d5e6f7a8b9c0" 
            });
            

            // Simulate driver searching delay
            setTimeout(() => {
                setIsLoading(false);
                alert("Driver Found! Toyota Glanza (DL 01 AA 1234) is arriving in 4 minutes.");
                navigate('/rides'); // Redirect to ride status/history
            }, 3000);

        } 
        catch (error) {
            setIsLoading(false);
            console.error("Booking Error:", error);
            alert("Connection failed. Please ensure the backend server is running.");
        }
    };

    return (
        <div style={containerStyle}>
            {/* 1. Sidebar Navigation */}
            <aside style={sidebarStyle}>
                <h1 style={logoStyle}>
    {/* Humne ek direct browser character use kiya hai (Standard browser entity) */}
    <span style={carIconStyle}>&#128663;</span> 
    Ucab
</h1>
                <nav style={navContainer}>
                    <div onClick={() => navigate('/profile')} style={navItemStyle}>👤 Profile</div>
                    <div onClick={() => navigate('/booking')} style={activeNavItemStyle}>🚗 Book a Ride</div>
                    <div onClick={() => navigate('/payments')} style={navItemStyle}>💳 Payments</div>
                    <div onClick={() => navigate('/support')} style={navItemStyle}>⚙️ Support</div>
                </nav>
                <div onClick={() => navigate('/')} style={logoutStyle}>Logout</div>
            </aside>

            {/* 2. Main Content Area */}
            <main style={mainAreaStyle}>
                <header style={headerStyle}>
                    <h2 style={{ fontWeight: '700', color: '#333' }}>Cab Booking</h2>
                    <div style={userActionStyle}>
                        <span style={{ cursor: 'pointer' }}>🔔</span>
                        <div style={avatarStyle}>HV</div>
                    </div>
                </header>

                {/* 3. Booking Section (Highlighted Form & Map) */}
                <div style={contentGridStyle}>
                    {/* Ride Request Form */}
                    <section style={formCardStyle}>
                        <h4 style={sectionTitleStyle}>BOOK YOUR RIDE</h4>
                        
                        <div style={inputGroupStyle}>
                            <label style={labelStyle}>Pickup Point</label>
                            <input 
                                type="text" 
                                placeholder="Enter pickup address..." 
                                style={inputStyle} 
                                onChange={(e) => setBookingDetails({...bookingDetails, pickup: e.target.value})}
                            />
                        </div>

                        <div style={inputGroupStyle}>
                            <label style={labelStyle}>Destination</label>
                            <input 
                                type="text" 
                                placeholder="Enter destination..." 
                                style={inputStyle}
                                onChange={(e) => setBookingDetails({...bookingDetails, destination: e.target.value})}
                            />
                        </div>

                        <h5 style={{ marginBottom: '15px', color: '#444' }}>Select Cab Class</h5>
                        <div style={cabSelectionStyle}>
                            <div 
                                onClick={() => setBookingDetails({...bookingDetails, cabType: 'Mini', fare: 25})} 
                                style={bookingDetails.cabType === 'Mini' ? activeCabCard : cabCard}
                            >
                                <span style={{fontSize: '24px'}}>🚕</span><br/>
                                <b>Ucab Mini</b><br/>
                                <small>$25.00</small>
                            </div>
                            <div 
                                onClick={() => setBookingDetails({...bookingDetails, cabType: 'Sedan', fare: 35})} 
                                style={bookingDetails.cabType === 'Sedan' ? activeCabCard : cabCard}
                            >
                                <span style={{fontSize: '24px'}}>🚙</span><br/>
                                <b>Ucab Sedan</b><br/>
                                <small>$35.00</small>
                            </div>
                        </div>

                        <button onClick={handleConfirmBooking} style={confirmBtnStyle}>
                            {isLoading ? "SEARCHING DRIVER..." : "CONFIRM RIDE"}
                        </button>
                    </section>

                    {/* Live Map Frame */}
                    <section style={mapWrapperStyle}>
                        <iframe 
                            title="live-map" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            src="https://www.openstreetmap.org/export/embed.html?bbox=77.10%2C28.50%2C77.30%2C28.70&layer=mapnik"
                            style={{ borderRadius: '20px' }}
                        ></iframe>
                    </section>
                </div>
            </main>

            {/* 4. Global Search Overlay */}
            {isLoading && (
                <div style={overlayStyle}>
                    <div className="loader-spinner"></div>
                    <h2 style={{ marginTop: '25px', letterSpacing: '1px' }}>Searching for nearby drivers...</h2>
                    <p style={{ opacity: 0.8 }}>Assigning the closest vehicle to your location</p>
                </div>
            )}

            {/* Animation Script */}
            <style>{`
                .loader-spinner { 
                    width: 70px; height: 70px; 
                    border: 7px solid rgba(255,255,255,0.3); 
                    border-top: 7px solid #fff; 
                    border-radius: 50%; 
                    animation: spin 0.8s linear infinite; 
                }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
};

// --- Stylesheet Object ---
const containerStyle = { display: 'flex', height: '100vh', backgroundColor: '#f8f9fc', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" };
const sidebarStyle = { width: '280px', backgroundColor: '#ffffff', borderRight: '1px solid #edf2f7', padding: '40px 24px', display: 'flex', flexDirection: 'column' };
const logoStyle = { 
    color: '#0052cc', 
    fontSize: '32px', 
    fontWeight: '800', 
    marginBottom: '50px', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '10px' // Logo aur icon ke beech ki jagah
};
const carIconStyle = {
    fontSize: '36px' // Icon ka size text se thoda bada
};
const navContainer = { flex: 1 };
const navItemStyle = { padding: '14px 16px', cursor: 'pointer', fontSize: '16px', color: '#64748b', borderRadius: '8px', transition: '0.2s', marginBottom: '8px' };
const activeNavItemStyle = { ...navItemStyle, backgroundColor: '#f0f7ff', color: '#0052cc', fontWeight: '600' };
const logoutStyle = { color: '#ef4444', cursor: 'pointer', fontWeight: '600', padding: '10px 16px' };

const mainAreaStyle = { flex: 1, padding: '40px', overflowY: 'auto' };
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px' };
const userActionStyle = { display: 'flex', alignItems: 'center', gap: '20px', fontSize: '20px' };
const avatarStyle = { width: '45px', height: '45px', backgroundColor: '#0052cc', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', fontWeight: 'bold', fontSize: '14px' };

const contentGridStyle = { display: 'flex', gap: '30px', height: '600px', alignItems: 'stretch' };
const formCardStyle = { flex: '0 0 380px', backgroundColor: '#ffffff', padding: '35px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' };
const sectionTitleStyle = { fontSize: '14px', fontWeight: '700', color: '#94a3b8', letterSpacing: '1.5px', marginBottom: '30px' };

const inputGroupStyle = { marginBottom: '25px' };
const labelStyle = { display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '8px' };
const inputStyle = { width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid #e2e8f0', backgroundColor: '#fdfdfd', outline: 'none', fontSize: '15px' };

const cabSelectionStyle = { display: 'flex', gap: '15px', marginBottom: '35px' };
const cabCard = { flex: 1, padding: '20px', borderRadius: '16px', border: '1.5px solid #e2e8f0', textAlign: 'center', cursor: 'pointer', transition: '0.2s' };
const activeCabCard = { ...cabCard, borderColor: '#0052cc', backgroundColor: '#f0f7ff', transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0, 82, 204, 0.1)' };

const confirmBtnStyle = { width: '100%', padding: '18px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '16px', cursor: 'pointer', fontWeight: '700', fontSize: '16px', boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.2)' };
const mapWrapperStyle = { flex: 1, borderRadius: '24px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' };
const overlayStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15, 23, 42, 0.9)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 10000, color: '#fff' };

export default Booking;

