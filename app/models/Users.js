import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String, unique: true,
    },
    phone: {
        type: String, unique: true,
    },
    password: {
        type: String,
    },
    img: {
        type: String,
    },
}, { timestamps: true });

const Users = mongoose.models.Users || mongoose.model('Users', UserSchema)

export default Users