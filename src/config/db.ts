import mongoose from "mongoose";

export const connectDB = async()=> {
try {
 const connection = await mongoose.connect(process.env.MONGO_URI as string);
 console.log(`\n\n_____________Database Connected_________________\n\n`);
 return connection;
} catch (error) {
    console.error(
        `\n\n-------------❌Error connecting to MongoDb: ${error}------------\n\n`,
    )
}
}