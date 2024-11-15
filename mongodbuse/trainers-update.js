const { timeStamp } = require('console');
const mongoose= require('mongoose');
const mongo_url="mongodb+srv://harshitharajashri:mongodbroot123@cluster0.te2ga.mongodb.net/"
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

    const collection_name='Trainer';
    const collection_fields={
        name:String,
        location:String,
        technology:String,
        phone_number:String
    };
    const collection_config={
        timestamps:false
    };
    const schema=mongoose.Schema(collection_fields,collection_config);
    const TrainerModel=mongoose.model(collection_name,schema);
    const updateTrainers=async()=>{
        await connectToMongo();
        try {
            const trainers=await TrainerModel.findOne({name:"Harshitha"});
            if(trainers){
                trainers.phone_number="7845784578";
                const updated_trainer=await TrainerModel.findOneAndUpdate(
                    {name:'Harshitha'},
                    {phone_number:"7845784578"},
                    {new:true}
                )
                console.log('all trainers:',updated_trainer);
            }
                
           
        }catch (err) {
            console.log(err);
        }finally{
            await mongoose.disconnect();
            console.log('disconnected ');
        }
    }
updateTrainers();