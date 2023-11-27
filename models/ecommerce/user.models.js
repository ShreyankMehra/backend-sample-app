import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },

    mobile:{
        type:Number,
        required:true,
    },

    address:{
        type:String

    },
    email:{
        type:String,
        required:true,
        unique:true
    }
    

},{timestamps:true})

export const User=mongoose.model("User",userSchema)