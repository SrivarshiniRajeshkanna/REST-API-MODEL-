import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userroutes from "./user.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
// MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(express.json());
app.use("/users", userroutes);
app.get("/",(req,res) =>{
    res.send("Hello from Homepage ")
})
app.listen(PORT ,() =>  {
    console.log(`Server is running on the port: http://localhost:${PORT}`); 
});