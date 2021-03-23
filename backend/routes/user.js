const express = require("express");
const router = express.Router();
const authUser = require('../middleware/authUser.js');

// @post order with auth middleware
router.post("/checkout", authUser, async(req, res) => {
  try {
    const newOrder = req.body;
    console.log("order", newOrder);

    //find user with id and save order

    //const token = req.token;
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(404).json({
      error: "order: Your request could not be processed. Please try again.",
    });
  }
  //
});

// // @get order history with auth middleware
// router.post("/orders", authUser, async(req, res) => {
//   try {
//     console.log("token", req.headers.authorisation);
//     res.status(200).json(req.body);
//   } catch (err) {
//     res.status(404).json({
//       error: "order: Your request could not be processed. Please try again.",
//     });
//   }
//   //
// });

module.exports = router;
