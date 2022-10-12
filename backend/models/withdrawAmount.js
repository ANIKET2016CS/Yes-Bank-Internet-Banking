const mongoose = require("mongoose");

const withdrawAmountSchema = new mongoose.Schema({
  debitFrom: {
    type: Number,
    required: true,
  },
  balanceAmount: {
    type: Number,
    required: true,
  },
  withdrawAmount: {
    type: Number,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("WithdrawAmount", withdrawAmountSchema);
