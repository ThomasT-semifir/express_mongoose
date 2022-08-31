import mongoose from "mongoose";
import { Profile } from "./Profile";

const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Profile
    }
})

export const User = mongoose.model('User', userSchema)