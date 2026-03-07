const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// 1. Config and App Initialization
dotenv.config();
const app = express();

// 2. Middleware (Must be after app initialization)
app.use(cors()); 
app.use(express.json());

// 3. Import Routes
const authRoutes = require('./routes/auth'); 
const rideRoutes = require('./routes/ride');

// 4. Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/ride', rideRoutes);

// 5. Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ucab')
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch(err => console.log("Connection Error: ", err));

// Basic Route for testing
app.get('/', (req, res) => {
    res.send("Ucab Backend Server Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));