const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  logo: {
    type: String,
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Product",
    default: null,
  }],
});

const Brand = mongoose.model("Brand", BrandSchema);

module.exports = Brand;
