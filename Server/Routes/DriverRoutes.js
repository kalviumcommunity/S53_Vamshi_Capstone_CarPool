const express = require('express');
const router = express.Router();
const driverController = require('../controllers/DriverController.js');  


router.get('/getdrivers', driverController.getAllDrivers);

router.post('/drivers', driverController.addDriver);
router.get('/drivers/:id', driverController.getDriverById);



module.exports = router;
