const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Product",
    default: null,
  }],
  image: {
    type: String,
  }
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
