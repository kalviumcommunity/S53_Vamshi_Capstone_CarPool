const express = require('express');
const userRoutes = require('./Routes/UserRoutes');
const driverRoutes = require('./Routes/DriverRoutes'); 
const connectMongoDB = require('./DataBase/ConnectMongoDB.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectMongoDB();

app.use(express.json());

app.use('/', userRoutes);
app.use('/', driverRoutes);  

// Welcome message
app.get('/', (req, res) => {
  res.send("Welcome to CarPool server");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
