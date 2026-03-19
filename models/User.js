import Username from "@/app/[username]/page";
import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true    
    },
    Username: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
    },
    coverPic: {
        type: String,
    },
    razorPayId: {
        type: String,
    },
    razorPaySecret: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
})

export default mongoose.models.User || model('User', userSchema);