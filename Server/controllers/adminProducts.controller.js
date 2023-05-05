const ProductModel = require('../models/product.model.js');

const getAdminProducts = async (req, res) => {
  let limit = 10;
  let page = req.query.page;
  let skip = (page - 1) * limit;
  try {
    let product = await ProductModel.find().skip(skip).limit(limit);
    return res.status(200).send(product);
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

const addAdminProducts = async (req, res) => {
  let payload = req.body;
  try {
    let product = new ProductModel(payload);
    await product.save();
    return res.status(200).send({ message: 'product added' });
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

const updateAdminProduct = async (req, res) => {
  let payload = req.body;
  let id = req.params.id;
  try {
    await ProductModel.findByIdAndUpdate(id, payload);
    return res.status(200).send({ message: 'product updated' });
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

const deleteAdminProduct = async (req, res) => {
  let id = req.params.id;
  try {
    await ProductModel.findByIdAndDelete(id, payload);
    return res.status(200).send({ message: 'product deleted' });
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

module.exports = {
  getAdminProducts,
  addAdminProducts,
  updateAdminProduct,
  deleteAdminProduct
};
