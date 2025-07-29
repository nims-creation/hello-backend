import mongoose from "mongoose";

const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.mongodbURL);
        console.log("Database connected");
        
    }catch(error){
        console.log("Database Error!,try once again to connect.");
        
    }
}

export default connectDb;