import mongoose from "mongoose";
const userSchema=mongoose.schema({
  name:{
    type:String,
    required:[true,"Please add a name"]

  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    trim: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email"
    ]
  },
  password:{
    type: String,
    required: [true, "Please add a password"],
    minlength: [6,"Password must upto 6 characters"]
  },
  photo:{
    type:String,
    required:[true,"please upload a photo"],
    default:"default.jpg"
  }
  phone:{
    type:String,
   
    default:"+88"
  }
  bio:{
    type:String,
    maxLength:[250,"Bio must not be more than 250 characters"]
    default:"bio"
  }
},{
    timestamps:true,
})

const User =mongoose.model("user",userSchema)
module.exports =User