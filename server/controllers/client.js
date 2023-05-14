const Product = require("../models/Product.js");
const ProductStat = require("../models/ProductStat.js");
const User = require("../models/User.js");
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productwithstats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productwithstats);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = getProducts;
