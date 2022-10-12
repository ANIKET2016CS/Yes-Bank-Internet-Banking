const { Router } = require("express");
const express = require("express");
const router = express.Router();
const FundTransfer = require("../models/fundTransfer");

/*Fetch all the records from the database*/
router.get("/", async (req, res) => {
  try {
    const user = await FundTransfer.find();
    res.json(user);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/*Fetch the selected records from the database*/
router.get("/:id", async (req, res) => {
  try {
    const fundTransfer = await FundTransfer.findById(req.params.id);
    res.json(fundTransfer);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/*Send the records to the database*/
router.post("/", async (req, res) => {
  const fundTransfer = new FundTransfer({
    debitFrom: req.body.debitFrom,
    payeeAccountNumber: req.body.payeeAccountNumber,
    yourBalance: req.body.yourBalance,
    amountToBeTransfer: req.body.amountToBeTransfer,
  });
  try {
    const data = await fundTransfer.save();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/* Update the selected data into the Database */
router.patch("/:id", async (req, res) => {
  try {
    const fundTransfer = await FundTransfer.findById(req.params.id);
    user.yourBalance = req.body.yourBalance;
    const data = await fundTransfer.save();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

/* Delete the selected data from the Database */
router.delete("/:id", async (req, res) => {
  try {
    const fundTransfer = await FundTransfer.findById(req.params.id);
    const data = await fundTransfer.delete();
    res.json(data);
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
