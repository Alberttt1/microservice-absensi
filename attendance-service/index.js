const express = require("express");
const mongoose = require("mongoose");
const attendanceRoutes = require("./routes/attendance");

const app = express();
app.use(express.json());

// koneksi database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Attendance database connected"))
  .catch(err => console.error(err));

app.use("/attendance", attendanceRoutes);

// agar bisa jalan di lokal & Vercel
if (require.main === module) {
  app.listen(3001, () => {
    console.log("Attendance service running on port 3001");
  });
}

module.exports = app;
