import mongoose from "mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Name Reqired"],
        minLength:[3,"Name must contain at least 3 char"]
    },
    email:{
        type: String,
        required:[true,"Email Reqired"],
        validate:[validator.isEmail,"Please provide valid email"]
    },
    subject:{
        type: String,
        required:[true,"Subject Reqired"],
        minLength:[5,"name must contain at least 5 char"]
    },
    message:{
        type: String,
        required:[true,"Message Reqired"],
        minLength:[10,"name must contain at least 3 char"]
    },
})
export const Message=mongoose.model("Message",messageSchema);