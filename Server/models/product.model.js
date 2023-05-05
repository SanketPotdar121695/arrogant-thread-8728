const { Schema, model } = require('mongoose');

const productSchema = Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: [Number], required: true },
    image: { type: String, required: true },
    size: { type: Schema.Types.Mixed, required: true },
    storages: { type: Schema.Types.Mixed, required: true },
    description: { type: Schema.Types.Mixed, required: true },
    color: String,
    addedAt: { type: Schema.Types.Mixed, required: true },
    updatedAt: { type: Schema.Types.Mixed, required: true }
  },
  {
    versionKey: false
  }
);

const ProductModel = model('product', productSchema);

module.exports = { ProductModel };
