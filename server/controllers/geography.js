const User = require("../models/User.js");
const getCountryIso3 = require("country-iso-2-to-3");

module.exports = getGeography = async (req, res) => {
  try {
    const users = await User.find();
    const mapped = users.reduce((acc, { country }) => {
      const coutryiso3 = getCountryIso3(country);
      if (!acc[coutryiso3]) {
        acc[coutryiso3] = 0;
      }
      acc[coutryiso3]++;

      return acc;
    }, {});
    const formate = Object.entries(mapped).map(([country, count]) => {
      return { id: country, value: count };
    });
    res.status(200).send(formate);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
