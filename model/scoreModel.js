const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", 
    required: true
  },
  score: {
    type: Number,
    required: [true, "Score is required"],
  },
  time: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model("Score", scoreSchema);
