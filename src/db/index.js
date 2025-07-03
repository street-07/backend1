import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB=async()=>{
    try {
        const connectionInstance = await mongoose.connect(`
            ${process.env.MONGODB_UR}/${DB_NAME}`)
            console.log(`/nMongoDb connected !! DB Host:${
                connectionInstance.connection.host}`);
            
    } catch (error) {
        console.log("MongoDB connection failed",error);
        throw error;
        
    }
}

export default connectDB