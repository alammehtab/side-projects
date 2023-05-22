const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    // who created the goal
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // ref
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
