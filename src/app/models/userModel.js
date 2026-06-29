import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  // users schema for buyer signup schema

  // common fields
  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    required: true, 
    trim: true,
    
  },


  mobile: {
    type: String,
    required:true,
    trim: true,
  },



  email: {
    type: String,
    required: true, 
    unique: true,
    trim: true,
    lowercase: true,
  },


  password: {
    type: String,
    required: true, 
  },

  userRole: {
    type: String,
    enum: ["buyer", "seller", "admin"],
    required: true,
    default: "buyer",
  },

  isEmailVerified: {
    type: Boolean,
    default: false,
  },

}, {timestamps: true,});


const User =mongoose.models.User || mongoose.model("User", userSchema)

export default User;
