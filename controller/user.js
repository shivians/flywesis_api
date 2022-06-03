const User = require("../models/userModel");

// Register User
//@route users/register
const userController = {
  register: async (req, res) => {
    try {
      console.log(req.body);
      const { email, phoneNumber, password, confirmPassword } = User(req.body);

      //input validation
      if (!(email || (phoneNumber && password && confirmPassword))) {
        return res.status(404).json({ message: "all input is required" });
      }

      //check user allready exist
      const oldUser = await User.findOne({
        email: email,
        phoneNumber: phoneNumber,
      });
      if (oldUser) {
        return res.status(404).json({ message: "user all ready exist" });
      }

      //match password and confirm password
      const confirmp = password === confirmPassword;

      if (!confirmp) {
        res.status(404).json({ message: "pasword-wrong" });
      }
      const newUser = await new User({
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        confirmPassword: confirmPassword,
      });
      await newUser.save();
      res.status(202).json({ message: "register successfully" });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "something is error" });
    }
  },

  // Login user
  //   @route users/login
  login: async (req, res) => {
    try {
      console.log(req.body);
      const { email, phoneNumber, password } = User(req.body);

      //input validation
      if (!(email || (phoneNumber && password))) {
        return res.status(400).json({ message: "all input is required" });
      }

      //check user data in database
      const user = await User.findOne({ email: email });
      if (user && password === user.password) {
        return res.status(200).json({ message: "login successfully" });
      } else {
        return res.status(400).json({ message: "user is not valid" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "invalid-credentials" });
    }
  },

  getUser: async (req,res) =>{
      try{
          const user = await User.find();
          return res.json({user})
      }catch(error){
          return res.status(400).json({err})
      }
  }
};
module.exports = userController;
