import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    vendorId: { type: String},
    caption: { type: String},
    imageURL: { type: String},
}, { timestamps: true });

export const CustomerModel = mongoose.model('Post', postSchema);