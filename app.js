import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRoute from "./routes/user.route.js"
import connectDB from "./database/db.js";
import cookieParser from "cookie-parser";

dotenv.config({});
const app=express()
const PORT=process.env.PORT || 3000;
// connect database
connectDB();

app.use(express.json())
app.use(cookieParser())
// Enable CORS for all routes
app.use(cors());

//api route
app.use("/api/user",userRoute);



app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})
