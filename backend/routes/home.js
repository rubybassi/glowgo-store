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
    //const { firstname, surname, email, password } = req.body;

    // validate user
    const authUser = await registerAuthSchema.validateAsync(req.body);
    console.log("auth user", authUser);

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(authUser.password, salt);
    console.log("userschema middleware hashed", hashedPassword);

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
      email: newUser.email,
      firstname: newUser.firstname,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };

    // return sanitised data
    res.status(200).json({ success: true, payload: { user: user } });
  } catch (err) {
    res.status(404).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// @POST sign in - add validate body middleware, then send jwt token and non-sensitive user info
router.post("/login", async (req, res) => {
  try {
    //const { email, password } = req.body;

    // validate user
    const authUser = await signinAuthSchema.validateAsync(req.body);
    console.log("auth user", authUser);

    // checks if user email exists in db
    const queryUser = await User.findOne({ email: authUser.email });
    if (!queryUser) {
      return res
        .status(409)
        .json({
          success: false,
          payload: { message: `No user found for that email` },
        });
    }

    // compare password to validate user sigining in vs user stored in db
    const match = bcrypt.compare(authUser.password, queryUser.password);
    if (!match) {
      return res
        .status(401)
        .json({
          success: false,
          payload: { message: `Password is incorrect` },
        });
    }

    // generate token
    const token = jwt.sign(
      { id: queryUser.id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '24h',
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
      email: queryUser.email,
      firstname: queryUser.firstname,
    };

    // return sanitised data
    res.status(200).json({ success: true, payload: { user: user, token } });

  } catch (err) {
    res.status(404).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
