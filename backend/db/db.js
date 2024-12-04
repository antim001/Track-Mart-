import mongoose from 'mongoose';
const connectToDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGOURI)
        console.log("db connected")
    }catch(error){
        console.log(error)
    }
}
export default connectToDb;