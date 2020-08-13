const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    workouts: [
      {
        date: { type: String, required: true },
        type: { type: String, required: true },
        km: { type: Number, required: true },
      },
    ],
  },
  { usePushEach: true }
);

module.exports = model("User", schema);
