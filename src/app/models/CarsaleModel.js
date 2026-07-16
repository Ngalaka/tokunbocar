import mongoose from "mongoose";

const CarsaleSchema = new mongoose.Schema({
  listedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // reference to the user who listed the property,
    // REMEBER TO ALWAYS USE CAPITALE LETTER TO NAME YOU MODEL "user" is not "User"
    required: true,
  },

   usedBy:{
    type:String,
    required: true,
   },

   year:{
    type:String,
    required:true,
   },

   modern:{
    type:String,
   required:true,
   },

   body:{
    type:String,
    required:true,
   },

   transmission:{
    type: String,
      enum: ["manual", "automatic"],
      required: true,
   },
   
    fuel: {
      type: String,
      enum: ["disel", "petrol", "electric"],
      required: true,
    },

    price:{
     type:Number,
     required:true, 
    },

    location:{
        type:String,
        required:true
    },

     status:{
        type: String,
        enum:["approved", "rejected", "pending"],
        default:"pending"
    },

    rejectionReason:{
      type:String,

    },

    propertyImages: {
      type: [String],
      required: true,
    },
    // soft delete implementation
    // instead of deleting a property from the database, 
    // we will mark it as inactive
    isActive:{
      type: Boolean,
      default: true,
    },

    featuredCar:{
      type: Boolean,
      default: false,
    }

}, {
    timestamps: true,
  }
);

 const CarsaleModel= mongoose.models.Carsale ||
  mongoose.model("Carsale", CarsaleSchema);

  export default CarsaleModel;
