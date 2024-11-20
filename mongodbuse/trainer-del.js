const { timeStamp } = require('console');
const mongoose= require('mongoose');
const mongo_url="mongodb+srv://harshitharajashri:password@cluster0.te2ga.mongodb.net/"
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
    const DelTrainers=async()=>{
        await connectToMongo();
        try {
            const deltrainers=await TrainerModel.findOneAndDelete({name:"Harshitha"});
            if(deltrainers){
                console.log('trainer deleted by name:',deltrainers);
            }else{
                console.log('no trainer found');
            }
           
        }catch (err) {
            console.log(err);
        }finally{
            await mongoose.disconnect();
            console.log('disconnected ');
        }
    }
DelTrainers();
