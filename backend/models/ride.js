// Path: backend/models/ride.js
const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    passengerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
    pickupLocation: { type: String, required: true },
    dropLocation: { type: String, required: true },
    fare: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['requested', 'accepted', 'completed', 'cancelled'], 
        default: 'requested' 
    },
    otp: { type: String },
    bookedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ride', rideSchema);