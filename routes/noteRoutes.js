const express = require("express");
const noteController = require("../controllers/noteController");

// Create a new router
const router = express.Router();

// Routes for notes collection
router.get("/", noteController.get_notes);
router.post("/add", noteController.add_note);
router.get("/:id", noteController.get_note_by_id);
router.put("/update/:id", noteController.update_note_by_id);
router.delete("/delete/:id", noteController.delete_note_by_id);

module.exports = router;
