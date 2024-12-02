import User from './models/userModel.js'
import bcrypt from 'bcryptjs';
import connectToDb from './db/db.js'
const userRegister=async()=>{
 connectToDb()
    try{
        const hashPassword=await bcrypt.hash('admin',10)
       const newUser=new User({
        name:'Admin',
        email:"admin@gmail.com",
        password:hashPassword,
        role:'admin'
       })
       await newUser.save()
    }catch(error){
        console.log(error);
    }
}
userRegister()
