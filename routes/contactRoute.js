const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");

router.post("/contact", async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "your.gmail.account@gmail.com", // like : abc@gmail.com
      pass: "your.gmailpassword", // like : pass@123
    },
  });

  let mailOptions = {
    from: "your.gmail.account@gmail.com",
    to: "receivers.email@domain.com",
    subject: "Check Mail",
    text: "Its working node mailer",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error.message);
    }
    console.log("success");
  });
});

module.exports = router;
