const express = require('express');
const router = express.Router();
const driverController = require('../controllers/DriverController.js');  

// Get all drivers
router.get('/drivers', driverController.getAllDrivers);

// Add a new driver
router.post('/drivers', driverController.addDriver);

// Update a driver by ID
router.put('/drivers/:id', driverController.updateDriver);

module.exports = router;
