const express = require('express');
const router = express.Router();
const { User } = require('../../database/index'); 

// @POST register - add validate body middleware, bcrypt password then send jwt token and non-sensitive user info
router.post('/register', async (req, res) => {
  try {
    const { firstname, surname, email, password } = req.body;  
    const user = await User.create({ firstname, surname, email, password });
    res.status(200).json(user); 
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Your request could not be processed. Please try again.",
      });
  }
});

// @POST sign in - add validate body middleware, then send jwt token and non-sensitive user info
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;  
    //const user = await User.find({ email: email });
    res.status(200).json(user); 
  } catch (err) {
    res
      .status(404)
      .json({
        error: "Your request could not be processed. Please try again.",
      });
  }
});

module.exports = router;