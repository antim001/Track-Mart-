import express from "express"
import dotenv from "dotenv";
import departmentRouter from './routes/department.js'
import cors from 'cors'
import authRouter from './routes/auth.js'
import connectToDb from './db/db.js'

dotenv.config();
connectToDb();
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/department',departmentRouter)
const Port= process.env.PORT || 5000
app.get("/", (req, res) => {
    res.send("Hello World");
})
app.listen(Port,()=>{
    console.log(`tracy tracy on port ${Port}`)
})