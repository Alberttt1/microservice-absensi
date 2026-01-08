const express = require("express");
const Attendance = require("../models/Attendance");
const router = express.Router();

// CREATE absensi
router.post("/", async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    res.json(attendance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ absensi
router.get("/", async (req, res) => {
  const data = await Attendance.find();
  res.json(data);
});

// UPDATE absensi
router.put("/:id", async (req, res) => {
  const data = await Attendance.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
});

// DELETE absensi
router.delete("/:id", async (req, res) => {
  await Attendance.findByIdAndDelete(req.params.id);
  res.json({ message: "Absensi berhasil dihapus" });
});

module.exports = router;
