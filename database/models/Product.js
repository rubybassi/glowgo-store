const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  sku: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  imageProductUrl: [
    {
      type: String,
    },
  ],
  pkSize: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  inventoryStatus: {
    type: String,
  },
  bestSeller: {
    type: Boolean,
  },
  newArrivals: {
    type: Boolean,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    default: null,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
