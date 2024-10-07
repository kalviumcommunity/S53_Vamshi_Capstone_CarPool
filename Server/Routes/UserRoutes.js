const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController.js'); // Assuming your controllers are in the 'controllers' folder

// Route for registering a new user
router.post('/register', userController.registerUser);

// Route for getting a user by ID
router.get('/users/:id', userController.getUser);

// Route for updating a user by ID
router.put('/users/:id', userController.updateUser);

// Route for deleting a user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
