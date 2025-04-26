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
      default : ""
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
    timestamps: true,  // Store timestamps (createdAt, updatedAt)
  }
);

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
