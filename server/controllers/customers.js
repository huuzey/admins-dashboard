const User = require("../models/User.js");

module.exports = getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password ");

    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json(error);
  }
};
