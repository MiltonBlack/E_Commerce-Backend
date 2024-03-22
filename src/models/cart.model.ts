import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
    userId : {type: String},
    vendorId: {type: String},
    productId: {type: String},
    name: {type: String},
    quantity:{type: Number},
    price:{type: Number}
}); 

export const CartModel = mongoose.model('Cart', cartSchema);