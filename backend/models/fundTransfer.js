const mongoose = require("mongoose");

const fundTransferSchema = new mongoose.Schema({
  debitFrom: {
    type: Number,
    required: true,
  },
  payeeAccountNumber: {
    type: Number,
    required: true,
  },
  yourBalance: {
    type: Number,
    required: true,
  },
  amountToBeTransfer: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("FundTransfer", fundTransferSchema);
