const Note = require("../models/notes");

// GET - /
const get_notes = (req, res) => {
  Note.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

// POST - /add
const add_note = (req) => {
  const note = new Note(req.body);
  note.save().catch((err) => console.log(err));
};

// GET - /:id
const get_note_by_id = (req, res) => {
  const id = req.params.id;

  Note.findById(id)
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

// PUT - /update/:id
const update_note_by_id = (req) => {
  const id = req.params.id;

  Note.findByIdAndUpdate(id, req.body).catch((err) => console.log(err));
};

// DELETE - /delete/:id
const delete_note_by_id = (req, res) => {
  const id = req.params.id;

  Note.findByIdAndDelete(id).catch((err) => console.log(err));
};

module.exports = {
  get_notes,
  get_note_by_id,
  add_note,
  update_note_by_id,
  delete_note_by_id,
};
