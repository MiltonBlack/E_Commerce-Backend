import mongoose, {Schema} from "mongoose";

const walletSchema = new Schema({
    vendorId: {type: String},
    accountName: {type: String},
    accountNumber: {type: String},
    bankName : {type: String}
});

export const WalletModel = mongoose.model('Wallet', walletSchema);