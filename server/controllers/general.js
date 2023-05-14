const User = require("../models/User.js");

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
};
module.exports = { getUser };
