const mongoose=require('mongoose')

const authSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"visitor"
    }
})

const authModel=mongoose.model("Auth",authSchema)
module.exports=authModel