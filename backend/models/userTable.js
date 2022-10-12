const mongoose = require("mongoose");

const userTableSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  totalAmount: 500,
});

module.exports = mongoose.model("UserTable", userTableSchema);
