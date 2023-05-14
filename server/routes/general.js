const express = require("express");
const { getUser } = require("../controllers/general");
const getDashboardStats = require("../controllers/dashboard");

const router = express.Router();
router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);
module.exports = router;
