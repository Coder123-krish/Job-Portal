import mongoose from "mongoose";

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        console.error("MONGO_URI is not set in .env");
        return;
    }

    try {
        await mongoose.connect(mongoUri);
        console.log("mongodb connected successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;