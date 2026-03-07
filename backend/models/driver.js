// Path: backend/models/driver.js
const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cabDetails: {
        cabType: { type: String, required: true }, // Mini, Sedan, SUV
        cabNumber: { type: String, required: true }
    },
    isAvailable: { type: Boolean, default: true },
    rating: { type: Number, default: 4.5 }
});

module.exports = mongoose.model('Driver', driverSchema);