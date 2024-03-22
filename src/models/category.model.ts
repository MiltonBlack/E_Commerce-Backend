import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({
    name: { type: String},
    imageURL: { type: String},
}, { timestamps: true });

export const CustomerModel = mongoose.model('Category', categorySchema);