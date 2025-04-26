const Driver = require("../Schema/schema.js");

// Get all drivers
exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json({ success: true, drivers });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};
exports.getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) {
      return res.status(404).json({ success: false, message: "Driver not found" });
    }
    res.status(200).json({ success: true, driver });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};
exports.addDriver = async (req, res) => {
  try {
    const newDriver = new Driver(req.body);
    await newDriver.save();
    console.log(newDriver)
    res.status(201).json({ success: true, message: "Driver added successfully", driver: newDriver });
  } catch (error) {
    console.log(error)
    res.status(400).json({ success: false, message: "Failed to add driver", error });
  }
};
