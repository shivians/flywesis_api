const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  article: {
    title: { type: String, required: true },
    user_id: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String },
  },
  comments: {
    type: String,
    required: true,
  },
});

const BLOG = mongoose.model("BLOG", blogSchema);
module.exports = BLOG;
