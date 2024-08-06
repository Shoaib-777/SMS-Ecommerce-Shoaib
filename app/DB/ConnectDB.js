import mongoose from "mongoose";

export default async function ConnectDB(){
    try {
    mongoose.connect(process.env.MONGO)
    console.log("connected to db shoaib bhai")
    } catch (err) {
        console.log("failed to connect",err)
    }
}