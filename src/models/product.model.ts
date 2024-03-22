import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    name: { type: String },
    categoryId: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    inStock: { type: Boolean },
}, { timestamps: true });

export const ProductModel = mongoose.model('Product', productSchema);