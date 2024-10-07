const express = require('express');
const connectMongoDB = require('./DataBase/ConnectMongoDB');  // Import MongoDB connection function
const userRoutes = require('./Routes/UserRoutes');  // Import user routes
require('dotenv').config();  // To use environment variables

const app = express();
const PORT = process.env.PORT || 5000;  // Use port from environment or default to 5000

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Connect to MongoDB using the external ConnectMongoDB.js
// connectMongoDB();

// Routes
app.use('/', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send("Welcome to CarPool server");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
