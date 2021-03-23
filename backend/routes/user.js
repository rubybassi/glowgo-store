const express = require("express");
const router = express.Router();

// @post order with auth middleware
router.post("/checkout", async (req, res) => {
  try {
    console.log("order recieved", req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(404).json({
      error: "order: Your request could not be processed. Please try again.",
    });
  }
  //
});
// @get order history with auth middleware

module.exports = router;
