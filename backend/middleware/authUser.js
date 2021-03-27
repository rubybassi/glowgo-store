require("dotenv").config();
const jwt = require("jsonwebtoken");

// gets token from header and runs a jwt verify add try catch
const authUser = (req, res, next) => {
  const token = req.header('Authorization');
  //const token = req.headers["authorisation"];
  //const token = tokenHeader && tokenHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
    if (err) return res.sendStatus(403);
    req.token = token;
    next();
  });
};

module.exports = authUser;