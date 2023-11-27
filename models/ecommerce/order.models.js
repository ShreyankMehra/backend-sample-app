import mongoose from "mongoose"


const orderitems = mongoose.Schema({

    productid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },

    quantity : {
        type : Number,
        required : true
    }
})

const orderSchema=mongoose.Schema({

    
    orderPrice : {

        type : Number,
        required : true
    },

    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    productlist : [orderitems]


},{timestamps:true})

export const Order=mongoose.model("Order",orderSchema)