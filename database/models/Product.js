const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  sku: {
    type: String,
  },
  name: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  description: {
    type: String,
  },
  imageThumbnailUrl: {
    type: String,
  },
  imageProductUrl: [
    {
      type: String, // array as can have multiple images
    },
  ],
  relatedProducts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product", // will map the product collection to find matching product IDs
    },
  ],
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  inventoryStatus: {
    type: String,
  },
  bestSeller: {
    type: Number, // use binary 1 = yes 0 = no
  },
  newArrivals: {
    type: Number, // use binary 1 = yes 0 = no
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
