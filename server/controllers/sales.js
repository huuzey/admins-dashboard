const OverallStat = require("../models/OverallStat");

module.exports = getSales = async (req, res) => {
  try {
    const overallstats = await OverallStat.find();
    res.status(200).send(overallstats[0]);
  } catch (error) {
    res.status(500).send(error);
  }
};
