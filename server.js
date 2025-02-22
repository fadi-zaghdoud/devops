const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./db');

const productRoutes = require("./app");
const server = express();

connectDB();

server.use("/api", productRoutes); // CRUD routes

// Use the PORT from the environment (e.g., set in .env.test) or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and export the instance so tests can close it after running
const appInstance = server.listen(PORT, function () {
  console.log("Server is running on port: " + PORT);
});

module.exports = appInstance;
