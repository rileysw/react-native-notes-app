const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Note Schema
const notesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

// Create Note Object
const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
