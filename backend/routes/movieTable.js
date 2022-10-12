const { Router } = require("express");
const express = require("express");
const router = express.Router();
const UserTable = require("../models/userTable");

/*Fetch all the records from the database*/
router.get("/", async (req, res) => {
  try {
    const users = await UserTable.find();
    res.json(users);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/*Fetch the selected records from the database*/
router.get("/:id", async (req, res) => {
  try {
    const users = await UserTable.findById(req.params.id);
    res.json(users);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/*Send the records to the database*/
router.post("/", async (req, res) => {
  const users = new UserTable({
    userId: req.body.userId,
    userPassword: req.body.userPassword,
    totalAmount: req.body.totalAmount,
  });
  try {
    const data = await users.save();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/* Update the selected data into the Database */
router.patch("/:id", async (req, res) => {
  try {
    const users = await UserTable.findById(req.params.id);
    user.name = req.body.name;
    const data = await users.save();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/* Delete the selected data from the Database */
router.delete("/:id", async (req, res) => {
  try {
    const users = await UserTable.findById(req.params.id);
    const data = await users.delete();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
