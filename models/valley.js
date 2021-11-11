const mongoose = require("mongoose") 
const valleySchema = mongoose.Schema({ 
 valley_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("valley", valleySchema) 