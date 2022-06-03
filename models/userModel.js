const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      min: 10,
      max: 10,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword:{
        type:String,
        required:true
    },
  },
  { timestamps: true }
);

const User =new mongoose.model("User", userSchema);

module.exports = User;
