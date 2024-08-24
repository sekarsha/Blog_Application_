const mongoose=require("mongoose")

const Post_Schema=new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    category:{type:String,required:true},
    author:{type:String,required:true},
    image:{type:String},
    createAt:{type:Date,default:Date.now},
    updateAt:{type:Date,default:Date.now}
})

module.exports=mongoose.model("Post",Post_Schema);