import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
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
    minlength: 4
  },
  role: {
    type: String,
    enum: ['buyer', 'seller', 'admin'],
    default: 'buyer'
  },

  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: { 
    type: String,
    required: true,
    trim: true
  },

  mobile: {
    type: String,
    required: true,
    trim: true
  }

}, { timestamps: true });

const User =
    mongoose.models.User ||
    mongoose.model("User", userSchema);

export default User;