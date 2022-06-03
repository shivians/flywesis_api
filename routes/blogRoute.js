const express = require("express");
const router = express.Router();
const BLOG = require("../models/blogModel");

//create blog

router.post("/createBlog", async (req, res) => {
  try {
    console.log(req.body);
    const blog = new BLOG(req.body);
    const newBlog = await blog.save();
    res.status(200).json({ message: "blog created", data: newBlog });
  } catch (error) {
    res.status(400).json({ message: "something is error" });
  }
});

//find all blogs
router.get("/allBlogs",async(req,res)=>{
  try {
      console.log(req.body)
      const blog=await BLOG.find()
      res.status(200).json({message:"find all products",data:blog})
      
      
  } catch (error) {
      console.log(error)
      res.status(400).json({message:"product not found"})
      
  }
})

//find single blog
router.get("/singleBlog/:id",async(req,res)=>{
  try {
      
      const id= req.params.id
      const blog = await BLOG.findById(id)
      res.status(200).json({message:"find one products",data:blog})
      
      
  } catch (error) {
      console.log(error)
      res.status(400).json({message:"blog not found"})
      
  }
})

module.exports = router;
