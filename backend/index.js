import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
dotenv.config();
const app = express()
const PORT = process.env.PORT || 5000


app.get('/', (req, res) => {
  res.send('Tract mart in under construction')
})

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
