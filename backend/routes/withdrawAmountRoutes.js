const { Router } = require("express");
const express = require("express");
const router = express.Router();
const WithdrawAmount = require("../models/withdrawAmount");

/*Fetch all the records from the database*/
router.get("/", async (req, res) => {
  try {
    const withdrawAmount = await WithdrawAmount.find();
    res.json(withdrawAmount);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/*Fetch the selected records from the database*/
router.get("/:id", async (req, res) => {
  try {
    const withdrawAmount = await WithdrawAmount.findById(req.params.id);
    res.json(withdrawAmount);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/*Send the records to the database*/
router.post("/", async (req, res) => {
  const withdrawAmount = new WithdrawAmount({
    debitFrom: req.body.debitFrom,
    balanceAmount: req.body.balanceAmount,
    withdrawAmount: req.body.withdrawAmount,
    remarks: req.body.remarks,
  });
  try {
    const withdrawAmount = await withdrawAmount.save();
    res.json(withdrawAmount);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/* Update the selected data into the Database */
router.patch("/:id", async (req, res) => {
  try {
    const withdrawAmount = await WithdrawAmount.findById(req.params.id);
    user.balanceAmount = req.body.balanceAmount;
    const data = await withdrawAmount.save();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/* Delete the selected data from the Database */
router.delete("/:id", async (req, res) => {
  try {
    const withdrawAmount = await WithdrawAmount.findById(req.params.id);
    const data = await withdrawAmount.delete();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
