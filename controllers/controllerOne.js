//IMPORT DATABASE
const dbOne = require('../db/dbOne')
//IMPORT JAVASCRIPT FRAMEWORK
const express = require("express")
//INITIATE AN INSTANCE OF YOUR ROUTERS
const controllerRouter = express.Router()

//FIRST ENDPOINT --> retrive all data(GET)
controllerRouter.get('/endpoinUurlGet',async(req, res)=>{
    try{}catch(e){}
})
//SECOND ENDPOINT -->Store One User(post)
controllerRouter.post('/storeOneUser',async(req, res)=>{
    try{
        console.log("simpleTest")
        const {username,age,email,password,improvement,comments,gender,build} = req.body
        console.log(username,age,email,password,improvement,comments,gender,build)
        const storeOneUser = await dbOne.insertOne({
            username,
            age,
            email,
            password,
            improvement,
            comments,
            gender,
            build
        })
        return res.status(201).send({message: "USER SAVED SUCCESSFULLY"})
    }catch(e){
        return res.status(404).send({error:e.message})
    }
})
//EXPORT CONTROLLER ROUTERS
module.exports = controllerRouter


