const express = require("express");
const router = express.Router();
const authUser = require("../middleware/authUser.js");
const { Order } = require("../../database/index");

// @post order with auth middleware
router.post("/checkout", authUser, async (req, res) => {
  try {
    const newOrder = req.body;
    // console.log("order", newOrder);
    const queriedUser = await Order.create(newOrder);
    //const token = req.token;
    res.status(200).json(queriedUser);
  } catch (err) {
    res.status(500).json({
      error: "order: Your request could not be processed. Please try again.",
    });
  }
});

// @get order history with auth middleware
router.get("/order/:id", authUser, async(req, res) => {
  try {
    const userID = req.params.id
    const queriedOrder = await Order.find({ userID: userID });
    // sanitise user object to not send sensitive info card convert to string then string.slice(-4) and parse int
    res.status(200).json(queriedOrder);
  } catch (err) {
    res.status(500).json({
      error: "order: Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
