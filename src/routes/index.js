const express = require("express");
const router = express.Router();

const productRoutes = require("./products");

router.use("/products", productRoutes);

module.exports = router;
