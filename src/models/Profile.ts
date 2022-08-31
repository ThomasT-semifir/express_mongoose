import mongoose from "mongoose";
import { User } from "./User";

const profileSchema: any = new mongoose.Schema({
    url: {
        type: String
    },
    profilePic: {
        type: String
    }
})

export const Profile = mongoose.model('Profile', profileSchema)