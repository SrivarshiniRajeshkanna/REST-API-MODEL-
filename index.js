import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userroutes from "./user.js";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
app.use("/users", userroutes);
app.use(express.static(path.join(__dirname, "public")));
app.get("/",(req,res) =>{
    res.send("Hello from Homepage ")
})

// MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT ,() =>  {
    console.log(`Server is running on the port: http://localhost:${PORT}`); 
});