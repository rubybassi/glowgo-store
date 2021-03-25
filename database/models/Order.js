const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    payment: {
      name: { type: String },
      number: { type: Number },
      expiry: { type: Number },
      cvv: { type: Number },
    },
    shipping: {
      firstname: { type: String },
      surname: { type: String },
      address1: { type: String },
      address2: { type: String },
      city: { type: String },
      postcode: { type: String },
    },
    orderTotal: {
      type: Number,
    },
    shippingFee: {
      type: String,
    },
    cartItems: [
      {
        productID: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        price: { type: Number },
        qty: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
