const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
const port=4000;
require("dotenv").config();
const FoodModel = require('./models/food');
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://harshitharajashri:food123@food-day3.louv3.mongodb.net/");

app.post('/insert',async(req,res)=>{
    const foodName=req.body.foodName;
    const day=req.body.day;
    const food= new FoodModel({foodName: foodName,day: day})
    try {
        await food.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
})
app.get('/read',async(req,res)=>{
    try {
        const result=await FoodModel.find({});
        res.send(result);
    } catch (error) {
        console.log(error);
    }
    
})
// app.put('/put',async(req,res)=>{

//     const newFoodName=req.body.newFoodName;
//     // console.log(req.body.newFoodName)
//     const id=req.body.id;
//     try {
//         const updatedFood=await FoodModel.findById(id);
//         // console.log(updatedFood)
//         // console.log(newFoodName)
//         updatedFood.foodName=newFoodName;
//          await updatedFood.save();
//          res.send("Updated successfully");
//     } catch (error) {
//         console.log(error);
//     }
// })
app.put('/put', async (req, res) => {
    const { id, newFoodName } = req.body;
    try {
    //   const updatedFood = await FoodModel.findById(id);
    const updatedFood = await FoodModel.findByIdAndUpdate(
        id,
        { foodName: newFoodName },
        { new: true, runValidators: true } // Returns the updated document
      );
      if (!updatedFood) {
        return res.status(404).send("Food item not found");
      }
      updatedFood.foodName = newFoodName;
      await updatedFood.save(); // Make sure this save actually happens
      console.log("Received ID:", req.body.id);
console.log("Received newFoodName:", req.body.newFoodName);

      res.send("Food updated successfully"); // Send confirmation
    } catch (error) { 
      console.error("Error updating food:", error);
      res.status(500).send("Error updating food");
    }
  });
  
app.delete("/delete/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        await FoodModel.findByIdAndDelete(id);
        res.send("deleted");
    } catch (error) {
        console.log(error);
    }
})
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`); 
})