const express = require("express");
const mongoose = require("mongoose");
const noteRoutes = require("./routes/noteRoutes");
require("dotenv").config();

// Create a new server
const server = express();

// MongoDB URI
const dbURI = process.env.DB_URI;

// Connect to MongoDB
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to Mongo DB!");
    server.listen(3000);
  })
  .catch((err) => console.log(err));

// Set up routes
server.use(express.json());
server.use("/notes", noteRoutes);
