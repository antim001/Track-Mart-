import asyncHandler from'express-async-handler';
import User from '../models/userModel.js'
export const registerUser = asyncHandler(async (req, res) => {
     const {name,email,password} =req.body

     //validation
     if(!name || !email || !password){
           res.status(400)
           throw new Error('Please fill in all fields')
     }
     if(password.length<6){
        res.status(400)
        throw new Error("password must be 6 characters")
     }
     //check existing email
     const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('Email already in use')
    }
    //create new user
    const user=await User.create({
        name,email,password
    })
    if(user){
        const{_id,name,email,photo,phone,bio}=user
        res.status(201).json({
            _id,name,email,phone,photo

        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user data')
    }

})
