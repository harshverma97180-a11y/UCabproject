const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    passengerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    },
    pickupLocation: String,
    dropLocation: String,
    fare: Number,
    status: {
        type: String,
        enum: ['requested', 'accepted', 'completed'],
        default: 'requested'
    }
}, { timestamps: true });

module.exports = mongoose.model('Ride', rideSchema);