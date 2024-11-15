const mongoose=require('mongoose');
const FoodSchema =new mongoose.Schema({
    foodName:{
        type:String,
        required:true,
    },
    day:{
        type:Number,
        required:true,
    }
})
const Food=mongoose.model('food',FoodSchema);
module.exports=Food;
