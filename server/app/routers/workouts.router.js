const { Router } = require("express");

const User = require("../models/User");
const authenticateJWT = require("../middleware/auth.middleware");

const router = Router();

// GET ALL WORKOUTS
router.get("/allworkouts", authenticateJWT, async (req, res) => {
  try {
    User.findById({ _id: req.user.userId }, async (err, user) => {
      if (err) {
        return res.status(400).json({
          message: "try againg something went wrong",
        });
      }
      return res.status(200).json({
        workouts: user.workouts,
      });
    });
  } catch (e) {
    return res.status(500).json({
      message: "Server was crashed, try again",
    });
  }
});

// ADD WORKOUT
router.post("/addworkout", authenticateJWT, async (req, res) => {
  try {
    const { date, type, km } = req.body;
    User.findById({ _id: req.user.userId }, async (err, user) => {
      if (err) {
        return res.status(400).json({
          message: "try againg something went wrong",
        });
      }
      user.workouts.push({ date: date, type: type, km: km });
      await user.save();
      res.status(200).json({ message: "Вы успешно добавили теренрвоку" });
    });
  } catch (e) {
    return res.status(500).json({
      message: "Server was crashed, try again",
    });
  }
});

// DELETE WORKOUT
router.delete("/delteworkout", authenticateJWT, async (req, res) => {
  try {
    const { id } = req.body;
    User.findById({ _id: req.user.userId }, async (err, user) => {
      if (err) {
        return res.status(400).json({
          message: "try againg something went wrong",
        });
      }
      user.workouts = user.workouts.filter((workout) => workout._id != id);
      await user.save();
      res.status(200).json({ message: "Вы успешно удалили теренрвоку" });
    });
  } catch (e) {
    return res.status(500).json({
      message: "Server was crashed, try again",
    });
  }
});

// CHANGE WORKOUT
router.post("/changeworkout", authenticateJWT, async (req, res) => {
  try {
    const { id, date, type, km } = req.body;
    User.findById({ _id: req.user.userId }, async (err, user) => {
      if (err) {
        return res.status(400).json({
          message: "try againg something went wrong",
        });
      }
      user.workouts = user.workouts.map((workout) => {
        if (workout._id == id) {
          workout.date = date;
          workout.type = type;
          workout.km = km;
          return workout;
        }
        return workout;
      });
      await user.save();
      res.status(200).json({ message: "Вы успешно изменили теренрвоку" });
    });
  } catch (e) {
    return res.status(500).json({
      message: "Server was crashed, try again",
    });
  }
});

module.exports = router;
