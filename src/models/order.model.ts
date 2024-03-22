import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({
    userId: {type:String},
    orderNumber:{type:String},
    totalAmount:{type: Number},
    status:{type:String, default:"Pending"}
})