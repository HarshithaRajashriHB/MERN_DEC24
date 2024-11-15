const { timeStamp } = require('console');
const mongoose= require('mongoose');
const mongo_url="mongodb+srv://harshitharajashri:resto1947@cluster2.2c4tz.mongodb.net/"
const connectToMongo=async()=>{
    mongoose.Promise=global.Promise;
    try{
        await mongoose.connect(mongo_url);
        console.log("connected to db");
    }catch(error){
        console.error("failed to connect to database",error);
        process.exit(1)

    }
}

    const collection_name='Restaurant';
    const collection_fields={
        name:String,
        id:Number,
        location:String,
        type:String,
        rating:Number,
        top_food:String
    };
    const collection_config={
        timestamps:false
    };
    const schema=mongoose.Schema(collection_fields,collection_config);
    const RestoModel=mongoose.model(collection_name,schema);
    
const createResto=async()=>{
    await connectToMongo();
    try {
        const restoModel=new RestoModel({
            _if:new mongoose.Types.ObjectId(),
            name:"Mahesh Prasad",
            id:1,
            location:"mysore",
            type:"indian",
            rating:0,
            top_food:"Benne masala dosa"
        })
        const createdDocument= await restoModel.save();
        console.log('resto created successfully',createdDocument)
    } catch (err) {
        console.log(err);
    }finally{
        await mongoose.disconnect();
        console.log('disconnected ');
    }
}
createResto();