const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  nim: {
    type: String,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  prodi: {
    type: String,
    required: true
  },
  angkatan: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Student", StudentSchema);
