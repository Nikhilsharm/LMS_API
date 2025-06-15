import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Local_URL);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log("error occured", error); 
    }
}
export default connectDB;
