import mongoose from "mongoose"

const productSchema=mongoose.Schema({
    name:{
        type : String,
        required : true,
        unique : true
    },
    cateogory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    price :{
        type :Number,
        required : true

    },
    stock :{
        type : Number,
        default :0
    }
},{timestamps:true})

export const Product=mongoose.model("Product",productSchema)