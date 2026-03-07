const Ride = require('../models/ride');

// Function to handle new ride requests
exports.requestRide = async (req, res) => {
    try {
        const { passengerId, pickupLocation, dropLocation, fare } = req.body;

        const newRide = new Ride({
            passengerId,
            pickupLocation,
            dropLocation,
            fare
        });

        const savedRide = await newRide.save();
        
        res.status(201).json({
            success: true,
            message: "Ride request saved to database",
            ride: savedRide
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create ride request",
            error: error.message
        });
    }
};