const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,  // Removes whitespace from both ends of the string
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,  // Removes whitespace
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,  // Automatically creates `createdAt` and `updatedAt` fields
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
