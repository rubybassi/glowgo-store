const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
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

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
