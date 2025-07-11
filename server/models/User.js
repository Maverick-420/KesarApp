const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,
      required: false,
    },
    otp: {
      type: Number,
      default: 0,
    },
    googleId: {
      type: String,
      required: false,
    },

    role: {
      type: String,
      default: "user",
      enum: ["user"],
    },
    purchasedProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
