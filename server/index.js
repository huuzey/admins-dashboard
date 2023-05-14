const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const clientRoutes = require("./routes/client.js");
const generalRoutes = require("./routes/general.js");
const managementRoutes = require("./routes/management.js");
const salesRoutes = require("./routes/sales.js");
const {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} = require("./data/index.js");
const User = require("./models/User.js");
const Product = require("./models/Product.js");
const ProductStat = require("./models/ProductStat.js");
const OverallStat = require("./models/OverallStat.js");

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

PORT = process.env.PORT || 7000;
mongoose
  .connect(process.env.MONGO_URL, console.log("connected"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server connected ${PORT}`);
      // Product.insertMany(dataProduct);
      // ProductStat.insertMany(dataProductStat);
      // Transaction.insertMany(dataTransaction);
      // OverallStat.insertMany(dataOverallStat);
      //AffiliateStats.insertMany(dataAffiliateStat);
    });
  })
  .catch((err) => console.log(err));
