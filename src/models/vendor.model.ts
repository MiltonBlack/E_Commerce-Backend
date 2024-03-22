import mongoose, {Schema} from "mongoose";

const vendorSchema = new Schema({
    name: {type: String},
    logoUrl: {type: String},
    bannerUrl: {type: String},
    status: {type: String}
});

export const VendorModel = mongoose.model('Vendor', vendorSchema);