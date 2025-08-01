import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type : String,
    },

    userName :{
        type : String,
        required : true,
        unique : true
    },

    email :{
        type : String,
        required : true,
        unique : true
    },

    password :{
        type : String,
        required : true,
    },

    image : {
        type : String,
        default : ""
    }
},{timestamps: true})


const user = mongoose.model("user", userSchema)
export default user;
