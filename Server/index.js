const express = require('express');
const connectMongoDB = require('./DataBase/ConnectMongoDB'); 
const userRoutes = require('./Routes/UserRoutes');  
require('dotenv').config();  

const app = express();
const PORT = process.env.PORT || 5000;  

app.use(express.json());



app.use('/', userRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to CarPool server");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
