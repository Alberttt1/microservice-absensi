const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/student");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

app.use("/students", studentRoutes);

// endpoint root biar ga 500
app.get("/", (req, res) => {
  res.send("Student Service is running");
});

module.exports = app; // ⬅️ WAJIB
