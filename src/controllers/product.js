const ProductModel = require("../schemas/product");

async function getAllProducts() {
  try {
    const products = await ProductModel.find();

    return products.map((product) => ({
      productId: product._id,
      name: product.name,
      price: product.price,
      info: product.description,
    }));
  } catch (error) {
    throw error;
  }
}

async function saveProduct(data) {
  try {
    const product = new ProductModel(data);
    await product.save();
    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllProducts,
  saveProduct,
};
