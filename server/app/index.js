const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 1338;

app.use(cors());
app.use(express.json({ extended: true }));

// Router
app.use("/api/auth", require("./routers/auth.router"));
app.use("/api/workouts", require("./routers/workouts.router"));

const start = async () => {
  try {
    await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`Connection to bd on ${process.env.URL}`);
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}...`);
    });
  } catch (e) {
    console.log("Server error", e.message);
  }
};
start();
