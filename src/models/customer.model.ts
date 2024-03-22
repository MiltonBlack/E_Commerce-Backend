import mongoose, {Schema} from "mongoose";

const customerSchema = new Schema({
    email: { type: String, unique: true },
    firstName: { type: String, },
    lastName: { type: String, },
    password: { type: String },
    country: { type: String, },
    state: { type: String, },
    address: { type: String, },
}, { timestamps: true });

export const CustomerModel = mongoose.model('Customer', customerSchema);