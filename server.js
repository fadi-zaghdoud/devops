const express = require("express");
const mongoose = require("mongoose");
const connectDB = require('./db');

const productRoutes = require("./app");
const server = express();

connectDB();

server.use("/api", productRoutes); // CRUD routes

// Use environment variable PORT if provided, otherwise default to 5000.
const PORT = process.env.PORT || 5000;
const appInstance = server.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});

// Export the server instance so tests can close it.
module.exports = appInstance;
