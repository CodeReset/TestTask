const { Router } = require("express");
const { check, validationResult } = require("express-validator");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/User");

const router = Router();

// Signin
router.post(
  "/signin",
  [
    check("username", "Username is not valid")
      .isString()
      .isLength({ max: 16, min: 6 }),
    check("password", "Password is not valid").isLength({
      max: 16,
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      console.log(req.body);
      const error = validationResult(req);

      if (!error.isEmpty()) {
        return res.status(400).json({
          error: error.array(),
          message: "One or more string not complitle correct!!!",
        });
      }

      const { username, password } = req.body;

      const usertryer = await User.findOne({ username });
      if (!usertryer) {
        return res.status(400).json({
          message: "User with this username didnt find, try again",
        });
      }

      const iscorrectPass = await bcrypt.compare(password, usertryer.password);
      if (!iscorrectPass) {
        return res.status(400).json({
          message: "Password not correct, try again",
        });
      }

      const token = jwt.sign({ userId: usertryer.id }, process.env.jwtSecret);

      return res.status(200).json({
        token: token,
        message: "Welcome to the Sport!!!",
      });
    } catch (e) {
      return res.status(500).json({
        message: "Try again server was wrong!!!",
      });
    }
  }
);

// Signup
router.post(
  "/signup",
  [
    check("username", "Username is not valid")
      .isString()
      .isLength({ max: 16, min: 6 }),
    check("email", "Email adress is not valid").isString().isEmail(),
    check("password", "Password is not valid").isLength({
      max: 16,
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const error = validationResult(req);

      if (!error.isEmpty()) {
        return res.status(400).json({
          error: error.array(),
          message: "One or more string not complitle correct!!!",
        });
      }

      const { username, email, password } = req.body;

      const usertryer = await User.findOne({ username });
      if (usertryer) {
        return res.status(400).json({
          message: "Please change your username this username has alredy used",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
      });

      await user.save();
      return res.status(201).json({
        message: "You have successfully registered",
      });
    } catch (e) {
      return res.status(500).json({
        message: "Try again server was wrong!!!",
      });
    }
  }
);

module.exports = router;
