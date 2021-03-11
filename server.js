const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connect to database for deployment
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// check to see if connected to test db
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));
conn.once("open", function () {
  console.log("connected to db");
});

// Define API routes here
app.use('/search', require('./backend/routes/search.js'));
app.use('/product', require('./backend/routes/product.js'));
app.use('/order', require('./backend/routes/order.js'));
app.use('/user', require('./backend/routes/user.js'));

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
