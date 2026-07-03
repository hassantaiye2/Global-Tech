//IMPORT DRIVERS
const mongoose = require("mongoose")
const express = require("express")
//DNS CONNECTION
const dns = require("node:dns")
dns.setServers(["8.8.8.8","8.8.4.4"])
//INITIATE AN INSTANCE OF EXPRESS FRAME-WORK
const app = express()
//IMPORT  FILES
const {mongodbPassword} = require('./utiles/config')
const {requestLogger,unknownEndpoint} = require('./utiles/middleware')
//IMPORT CONTROLLER
const controllerOne = require('./controllers/controllerOne')
//CONNECTION TO MONGODB
const url =  `mongodb+srv://Taiye:${mongodbPassword}@cluster0.gwddujq.mongodb.net/`
mongoose.connect(url)
.then(()=>{
    console.log(`CONECCTION SUCESSFUL`)
})
.catch((e)=>{
    console.error("Connection error", e)
})

//MIDDLEWARE
app.use(express.json())
app.use(express.static("build"))
app.use(requestLogger)
//SET UP CONTROLLERS
app.use("/api", controllerOne) //
app.use(unknownEndpoint)
//EXPORT APP
module.exports = app

