const { Router } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/userDetails");

/*Fetch all the records from the database*/
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/*Fetch the selected records from the database*/
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/*Send the records to the database*/
router.post("/", async (req, res) => {
  const user = new User({
    userId: req.body.userId,
    userName: req.body.userName,
    userPassword: req.body.userPassword,
    userEmail: req.body.userEmail,
  });
  try {
    const data = await user.save();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/* Update the selected data into the Database */
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.name = req.body.name;
    const data = await user.save();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/* Delete the selected data from the Database */
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const data = await user.delete();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
