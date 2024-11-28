import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
dotenv.config();
const app = express()
const port = process.env.PORT||8000

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors());
app.get("/", (req, res) => {
    res.send("Track Mart is running!");
  });
  
console.log(`server is running on ${port}`)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
  console.log("MONGO_URI:", process.env.MONGO_URI);
  console.log("PORT:", process.env.PORT);