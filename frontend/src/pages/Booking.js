import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
    const delhiLocations = [
  "Chawri Bazar", "Karampura", "Connaught Place", 
  "Hauz Khas", "Chandni Chowk", "Saket", "Rohini", "Dwarka"
];
    // Existing states (like isLoading) are here
    const [showNotifications, setShowNotifications] = useState(false); 
    
    // ... rest of your code like handleConfirmBooking ...
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
    
    /* English Comments: Search logic for Pickup and Destination */

const handleSearch = async (address, type) => {
    if (!address) return;
    
    // Using Nominatim API to get coordinates from address string
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
    const data = await response.json();
    
    if (data.length > 0) {
        const { lat, lon } = data[0];
        // Update map view to the searched location (e.g., Chawri Bazar)
        console.log(`Moving map to ${lat}, ${lon} for ${type}`);
        // Here you would update your map state
    }
};

/* In your Input fields (Approx Line 75-80) */
<input 
    type="text" 
    list="locations-list"
    placeholder="Enter pickup address..." 
    style={inputStyle}
    onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(e.target.value, 'pickup') }}
    /* Existing style and onChange */
/>



        setIsLoading(true);
        try {
            // Integrating with Backend API
            // Note: passengerId should ideally come from your Auth context/state
            /* await axios.post('http://localhost:5000/api/ride/request', {
                pickupLocation: bookingDetails.pickup,
                dropLocation: bookingDetails.destination,
                fare: bookingDetails.fare,
                passengerId: "65e8f1a2b3c4d5e6f7a8b9c0" 
            }); */
            

            // Simulate driver searching delay
            setTimeout(() => {
                setIsLoading(false);
                alert("Ride Confirmed! Your driver is on the way and will reach your pickup location shortly.");
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
    <img 
        src="/modern-car.png" 
        alt="Ucab Logo" 
        style={{ width: '85px', height: 'auto', marginRight: '10px' }} 
    />
    Ucab
</h1>
                <nav style={navContainer}>
                    <div onClick={() => navigate('/profile')} style={navItemStyle}>👤 Profile</div>
                    <div onClick={() => navigate('/booking')} style={activeNavItemStyle}>🚗 Book a Ride</div>
                    <div onClick={() => navigate('/payments')} style={navItemStyle}>💳 Payments</div>
                    <div onClick={() => navigate('/notifications')} style={navItemStyle}>🔔 Notifications</div>
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
                                list="locations-list"
                                placeholder="Enter pickup address..." 
                                style={inputStyle} 
                                onChange={(e) => setBookingDetails({...bookingDetails, pickup: e.target.value})}
                            />
                        </div>
                        {/* Datalist section starts here */}
<datalist id="locations-list">
  {delhiLocations.map((loc, index) => (
    <option key={index} value={loc} />
  ))}
</datalist>

                        <div style={inputGroupStyle}>
                            <label style={labelStyle}>Destination</label>
                            <input 
                                type="text" 
                                list="locations-list"
                                placeholder="Enter destination..." 
                                style={inputStyle}
                                onChange={(e) => setBookingDetails({...bookingDetails, destination: e.target.value})}
                            />
                        </div>
                        {/* Datalist section starts here */}
<datalist id="locations-list">
  {delhiLocations.map((loc, index) => (
    <option key={index} value={loc} />
  ))}
</datalist>

                        <h5 style={{ marginBottom: '15px', color: '#444' }}>Select Cab Class</h5>
                        <div style={cabSelectionStyle}>
                            <div 
                                onClick={() => setBookingDetails({...bookingDetails, cabType: 'Mini', fare: 25})} 
                                style={bookingDetails.cabType === 'Mini' ? activeCabCard : cabCard}
                            >
                                <img src="mini-car.jpg" alt="Mini Car" style={{ width: '54px', height: 'auto', marginBottom: '10px' }} /><br/>
                                <b>Ucab Mini</b><br/>
                                <small>$25.00</small>
                            </div>
                            
                            <div 
                                onClick={() => setBookingDetails({...bookingDetails, cabType: 'Sedan', fare: 35})} 
                                style={bookingDetails.cabType === 'Sedan' ? activeCabCard : cabCard}
                            >
                                <img src="sedan-car.webp" alt="Sedan Car" style={{ width: '54px', height: 'auto', marginBottom: '10px' }} /><br/>
                                <b>Ucab Sedan</b><br/>
                                <small>$35.00</small>
                            </div>
                            {/* SUV Option */}
<div 
    onClick={() => setBookingDetails({...bookingDetails, cabType: 'SUV', fare: 45})}
    style={bookingDetails.cabType === 'SUV' ? activeCabCard : cabCard}
>
    <img src="suv-car.jpg" alt="SUV Car" style={{ width: '54px', height: 'auto', marginBottom: '10px' }} /><br/>
    <b>Ucab SUV</b><br/>
    <small>$45.00</small>
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
                            src="https://www.openstreetmap.org/export/embed.html?bbox=77.00%2C28.40%2C77.40%2C28.80&layer=mapnik"
                            style={{ borderRadius: '20px', filter: 'grayscale(0.2) contrast(1.1)' }}
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
        width: 80px; 
        height: 80px; 
        border: 5px solid rgba(255,255,255,0.1); 
        border-top: 5px solid #007bff; /* Matching brand blue */
        border-radius: 50%; 
        animation: spin 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite; 
    }
    @keyframes spin { 
        0% { transform: rotate(0deg); } 
        100% { transform: rotate(360deg); } 
    }
`}</style>
        </div>
    );
};

// --- Stylesheet Object ---
const containerStyle = { display: 'flex', height: '100vh', backgroundColor: '#f8f9fc', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" };
const sidebarStyle = {
    width: '240px', 
    backgroundColor: '#fff', 
    padding: '40px 20px', 
    borderRight: '1px solid #eee',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flexShrink: 0 // Isse sidebar apni jagah nahi chhodege
};
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
const activeNavItemStyle = { 
    ...navItemStyle, 
    backgroundColor: '#e7f0ff', // Light blue background
    color: '#007bff', 
    fontWeight: '600',
    boxShadow: '0 2px 4px rgba(0, 123, 255, 0.1)' 
};
const logoutStyle = { color: '#ef4444', cursor: 'pointer', fontWeight: '600', padding: '10px 16px' };

const mainAreaStyle = {
    flex: 1,
    padding: '20px 25px 20px 30px', // Chautha value (30px) sidebar se space badha dega
    backgroundColor: '#f8f9fc',
    overflowY: 'auto'
};
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px' };
const userActionStyle = { display: 'flex', alignItems: 'center', gap: '20px', fontSize: '20px' };
const avatarStyle = { width: '45px', height: '45px', backgroundColor: '#0052cc', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', fontWeight: 'bold', fontSize: '14px' };

const contentGridStyle = { display: 'flex', gap: '15px', height: '600px', alignItems: 'stretch' };
const formCardStyle = { flex: '0 0 380px', backgroundColor: '#ffffff', padding: '35px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' };
const sectionTitleStyle = { fontSize: '14px', fontWeight: '700', color: '#94a3b8', letterSpacing: '1.5px', marginBottom: '30px' };

const inputGroupStyle = { marginBottom: '25px' };
const labelStyle = { display: 'block', fontSize: '13px', fontWeight: '600', color: '#475569', marginBottom: '8px' };
const inputStyle = { width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid #e2e8f0', backgroundColor: '#fdfdfd', outline: 'none', fontSize: '15px' };

const cabSelectionStyle = { display: 'flex', gap: '15px', marginBottom: '35px' };
const cabCard = { flex: 1, padding: '20px', borderRadius: '16px', border: '1.5px solid #e2e8f0', textAlign: 'center', cursor: 'pointer', transition: '0.2s' };
const activeCabCard = { ...cabCard, borderColor: '#0052cc', backgroundColor: '#f0f7ff', transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0, 82, 204, 0.1)' };

const confirmBtnStyle = { width: '100%', padding: '18px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '16px', cursor: 'pointer', fontWeight: '700', fontSize: '16px', boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.2)' };
const mapWrapperStyle = { 
    flex: 1, 
    borderRadius: '24px', 
    border: '1.5px solid #edf2f7', 
    overflow: 'hidden', 
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', // Soft deep shadow
    transition: '0.3s'
};
/* Update overlayStyle (Approx Line 212) */
const overlayStyle = { 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    backgroundColor: 'rgba(0, 0, 0, 0.85)', // Slightly transparent dark
    backdropFilter: 'blur(8px)', // Glass effect
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 10000, 
    color: '#fff' 
};

export default Booking;

