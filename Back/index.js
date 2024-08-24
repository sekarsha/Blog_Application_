const express=require("express")
const mongoose=require("mongoose")
const body_parser=require("body-parser")
const router=require("./Routes/Post_Routes")
const cors=require("cors")

const app=express()
const PORT=process.env.PORT || 8000

app.use(body_parser.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/blogs")
.then(()=>console.log("DATA BASE CONNECTED"))
.catch((ERR)=>console.log("DATA BASE NOT CONNECTED"+ERR)
)

app.use("/api/Posts",router)



app.listen(PORT,()=>console.log("SERVER IS Running"))