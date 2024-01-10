import mongoose from 'mongoose';
const prodctSchema = new mongoose.Schema({
    descreption:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    productImage:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    stock:{
        default: 0,
        type: Number,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required: true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
    

},{timestamps: true})
 

export const Product = mongoose.model("Product", prodctSchema)