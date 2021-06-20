const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/Users");
// @route POST api/user
// @desc  Register a user
// @access Public
router.post(
  "/",
  [
    check("name", "Please add name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with length more than 6"
    ).isLength({ min: 6, max: 20 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errros: errors.array() });
    }
    res.send('passed')
  }
);

module.exports = router;
