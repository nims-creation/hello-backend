import mongoose  from "mongoose";

const connectDb = async ()=>{
    try{
        const mongoURl = process.env.MONGODB_URL;
        if (!mongoURl) {
            throw new Error("MONGODB_URL environment variable is not set.");
        }
        await mongoose.connect(mongoURl);
        console.log("Database connected");
        
    }catch(error){
        console.log("Database Error!, try once again to connect.");
        console.error(error);
        
    }
}

export default connectDb;