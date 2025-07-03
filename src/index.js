// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";


import dotenv from "./dotenv"
import connectDB from "./db/index.js"


//1st way 
//require('dotenv').config({path: './env'})

//2nd way
dotenv.config({
    path:'./env'
})

connectDB
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running :${process.env.PORT }`);
        
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed!!!",error);
    
})

/*
import express from "express"
const app = express()

(async()=>{
    try {
        const connectionInstance = await mongoose.connect(`
            ${process.env.MONGODB_UR}/${DB_NAME}`)
            app.on("error",(error)=>{
                console.log("error:",error);
                throw error
                
            })
            app.listen(process.env.port,()=>{
                console.log(`App is listening on port${
                    process.env.PORT
                }`);
                
            })
    } catch (error) {
        console.log("MongoDB connection failed",error);
        throw error;
        
    }
})()
    */