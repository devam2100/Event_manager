import express from "express";
import { dbConnection } from "./dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./models/router/messageRouter.js";
// import sendMeassage from "./router/messageRouter.js"
//import Router from "./models/router/messageRouter.js";
dotenv.config({path:"/Users/apple/Desktop/BACKEND/config/config.env"});
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/message",messageRouter)
app.use(cors({
    origin:"http://localhost:5173",
    metthods:["POST"],
    Credentials:true,
}))

dbConnection();
export default app;
