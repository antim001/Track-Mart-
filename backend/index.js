import express from "express"
import dotenv from "dotenv";
import cors from 'cors'
import authRouter from './routes/auth.js'
import connectToDb from './db/db.js'
dotenv.config();
connectToDb();
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRouter)

app.get("/", (req, res) => {
    res.send("Hello World");
})
app.listen(process.env.PORT,()=>{
    console.log(`tracy tracy on port ${process.env.PORT}`)
})