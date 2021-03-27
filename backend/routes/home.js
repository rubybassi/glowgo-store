const express = require("express");
const router = express.Router();
const { User } = require("../../database/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerAuthSchema } = require("../authentication/registerSchema");
const { signinAuthSchema } = require("../authentication/signinSchema");

// @POST user register
router.post("/register", async (req, res) => {
  try {
    // validate user
    const authUser = await registerAuthSchema.validateAsync(req.body);
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(authUser.password, salt);
    // check if email already exists in db
    const queryUser = await User.findOne({ email: authUser.email });
    if (queryUser) {
      return res
        .status(409)
        .json({ success: false, payload: { message: `Email already exists` } });
    }
    // save to db
    const newUser = await User.create({
      firstname: authUser.firstname,
      surname: authUser.surname,
      email: authUser.email,
      password: hashedPassword,
    });
    // sanitise newUser to strip out sensitive data
    const user = {
      id: newUser.id,
      firstname: newUser.firstname,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };
    // return sanitised data
    res.status(200).json({ success: true, payload: { user: user } });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// @POST sign in
router.post("/login", async (req, res) => {
  try {
    // validate user
    const { error, value } = await signinAuthSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message})
    }
    // checks if user email exists in db
    const queryUser = await User.findOne({ email: value.email });
    if (!queryUser) {
      return res.status(409).json({
        success: false,
        payload: { message: `No user found for that email` },
      });
    }
    // compare password to validate user sigining in vs user stored in db
    const match = await bcrypt.compare(value.password, queryUser.password);
    if (!match) {
      return res.status(401).json({
        success: false,
        payload: { message: `Password is incorrect` },
      });
    }
    // generate token
    const token = jwt.sign(
      { id: queryUser.id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "24h",
      }
    );
    if (!token) {
      return res
        .status(401)
        .json({ success: false, payload: { message: `Couldn't get token` } });
    }
    // sanitise newUser to strip out sensitive data
    const user = {
      id: queryUser.id,
      firstname: queryUser.firstname,
    };
    // return sanitised data
    res.status(200).json({
      success: true,
      payload: {
        token,
        user: user,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: "Your request could not be processed. Please try again.",
    });
    console.log('error', err)
  }
});

module.exports = router;
