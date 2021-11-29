const mongoose = require("mongoose") 
const valleySchema = mongoose.Schema({ 
 valley_type: {
     type:String,
     minLength:5
 }, 
 size:{
     type:String,
     minLenght:5
 }, 
 cost: Number 
}) 
 
module.exports = mongoose.model("valley", valleySchema) 