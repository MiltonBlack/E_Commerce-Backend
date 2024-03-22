import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema({
    email: {type: String},
    phone: {type: Number},
    address: {type: String}
});

export const ContactModel = mongoose.model('Contact', contactSchema);