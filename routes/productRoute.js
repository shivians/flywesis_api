
const express= require("express");
const router=express.Router()
const Product=require("../models/productModel")

//product routes

router.post("/createProduct",async(req,res)=>{
    try {
        console.log(req.body)
        const addProduct = new Product(req.body)
        const newProduct = await addProduct.save()
        res.status(200).json({
            data:newProduct,
        message:" product added successfully"
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"something is error"})
        
    }
})

//find all-products

router.get("/allProducts",async(req,res)=>{
    try {
        console.log(req.body)
        const product=await Product.find()
        res.status(200).json({message:"find all products",data:product})
        
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"product not found"})
        
    }
})

//find single product

router.get("/singleProducts/:id",async(req,res)=>{
    try {
        
        const id= req.params.id
        const product = await Product.findById(id)
        res.status(200).json({message:"find one products",data:product})
        
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"product not found"})
        
    }
})



module.exports=router

 

