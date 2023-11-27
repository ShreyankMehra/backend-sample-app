import mongoose from "mongoose"

const categorySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    yearofmaxsales:{
        type : Number,
        
    }

},{timestamps:true})

export const Category =mongoose.model("Category",categorySchema)