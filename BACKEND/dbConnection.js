// 
import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect("mongodb+srv://devampatel2100:devampatel2100@dev.19uxtro.mongodb.net/?retryWrites=true&w=majority&appName=dev", {
    dbName: "MERNAPP_DEV"
  }).then(() => {
    console.log("Connected Successfully");
  })
};


