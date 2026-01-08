const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  tanggal: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Hadir", "Izin", "Sakit", "Alpha"],
    required: true
  }
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
