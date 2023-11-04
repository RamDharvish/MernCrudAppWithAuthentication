const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    number:Number
})

const userModel=mongoose.model("User",userSchema)

module.exports=userModel