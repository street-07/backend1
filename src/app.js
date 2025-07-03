import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser' //it store the detail in cookie



const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

//configuration of app
app.use(express.json({limit:"16kb"})) //limit of data accept

app.use(express.urlencoded({extended:true,limit1:"6kb"}))//mean data come from url and their are different url for same search

app.use(express.static("public"))//to store pdf file or asset came

app.use(cookieParser() )
export {app}