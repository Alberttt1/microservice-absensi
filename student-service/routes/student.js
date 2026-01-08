const express = require("express");
const Student = require("../models/student.js");
const router = express.Router();

// CREATE mahasiswa
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ mahasiswa
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// UPDATE mahasiswa
router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(student);
});

// DELETE mahasiswa
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Mahasiswa berhasil dihapus" });
});

module.exports = router;
