
//Driver schema

const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    driver_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    driver_name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    driver_image: {
      type: String,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(v);
        },
        message: (props) => `${props.value} is not a valid URL for an image!`,
      },
    },
    ratings: {
      type: Number,
      min: [0, "Rating must be at least 0"],
      max: [5, "Rating must be at most 5"],
      default: 0,
    },
    car_name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price must be a positive number"],
    },
    from_location: {
      type: String,
      required: true,
      trim: true,
    },
    to_location: {
      type: String,
      required: true,
      trim: true,
    },
    no_of_seats_available: {
      type: Number,
      required: true,
      min: [0, "Number of seats available cannot be negative"],
      validate: {
        validator: Number.isInteger,
        message: (props) => `${props.value} is not an integer!`,
      },
    },
    departure_time: {
      type: Date,
      required: true,
      validate: {
        validator: function (v) {
          return v > new Date();
        },
        message: (props) =>
          `Departure time ${props.value} must be in the future!`,
      },
    },
  },
  {
    collection: "drivers",
    timestamps: true, // Automatically creates createdAt and updatedAt fields
  }
);

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;

// User login schema

// Import the necessary modules
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // Ensures that each username is unique
    trim: true,    // Removes whitespace from both ends of the string
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensures that each email is unique
    trim: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// Middleware to hash the password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);  // Generate a salt with 10 rounds
    this.password = await bcrypt.hash(this.password, salt);  // Hash the password with the salt
    next();
  } catch (error) {
    next(error);
  }
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
