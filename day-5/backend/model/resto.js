const mongoose=require('mongoose');
const restoSchema =new mongoose.Schema({
    restoName:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    topFood:{
        type:String,
        required:true,
    }
})
const Resto=mongoose.model('Restaurant',restoSchema);
module.exports=Resto;
