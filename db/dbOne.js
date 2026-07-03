//IMPORT DRIVERS
const mongoose = require("mongoose")
//SET-UP YOUR MONGODB SCHEMA
const dbSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
//        maxLength : 20,
//        minLength : 10
    },
    age: {
        type: Number,
        required: true,
//        maxLength : 150,
//        minLength : 1
    },
    email: {
        type: String
    },
    password : {
        type: String,
        required : true
    },
    comments:{
        type: String
    },
    improvement:{
        type: String
    },
    like :{
        type: String
    },
    gender:{
        type:String
    },
    build :{
        type:Array
    }
})

dbSchema.set("toJSON",{
  //KEYNAME :KEYVALUE)
  transform : function(document, returnedObject){
    delete returnedObject.password
  }
})


//CREATE MODEL
const dbOne = mongoose.model("dbOne", dbSchema)
//EXPORT MODEL
module.exports = dbOne