const express = require("express");
const router = express.Router();

const { getAllProducts, saveProduct } = require("../controllers/product");

// To get all the products
router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
});

// to save a product
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const savedProduct = await saveProduct(data);
    res.json(savedProduct);
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
});

module.exports = router;
