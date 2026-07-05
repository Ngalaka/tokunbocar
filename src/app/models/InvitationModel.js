import mongoose from "mongoose";
const invaitationSchema = new mongoose.Schema({
createdFor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
email: {
    type: String,
    required: true
},

code: {
    type: String,
    required: true,
},

isUsed: {
    type: Boolean,
    default: false
},

isExpired: {
    type: Boolean,
    default: false
},

expirationDate: {
    type: Date,
    default: () => new Date(Date.now() + 2 * 60 * 60 * 1000) // Set expiration date to 24 hours from now
},

usedAt: {
    type: Date,
    default: null
},


},{ timestamps: true });

const InvitationModel = mongoose.models.invitation ||
    mongoose.model("invitation",invaitationSchema);

export default InvitationModel;
