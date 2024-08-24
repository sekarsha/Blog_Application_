const express=require("express")
const router=express.Router()
const Post=require("../Models/Posts")


/////////////////////////Get all item /////////////
router.get("/",async(req,res)=>{
    
    try {

        const get_post=await Post.find()
        res.json(get_post)
        
    } catch (error) {
        
        res.status(500).json(error+"Router la first get method la error")
    }
})

//////////////////get single post////////////////////

router.get("/:id",async(req,res)=>{
  try {

        const single_item=await Post.findById(req.params.id)
        res.json(single_item)

        if(!single_item){
                res.status(404).json("Router la single item la Post No")
        }
    
  } catch (error) {
     
    res.status(500).json(error+"Router single item la error")

  }

})
/////////////////////////create post///////////////////////

router.post("/",async(req,res)=>{

   const post=new Post({

    title:req.body.title,
    content:req.body.content,
    category:req.body.category,
    author:req.body.author,
    image:req.body.image,
   })

   try {
           
    const new_post=await post.save()
    res.status(201).json(new_post)

   } catch (error) {
    res.status(400).json(error+"Created post la error")
   }

})
///Update post//////
router.put("/:id",async(req,res)=>{
      
    try {

        const post =await Post.findById(req.params.id)
         
        if(!post){
            res.status(404).json("Router la put No")
        }

        post.title=req.body.title || post.title;
        post.content=req.body.content || post.content;
        post.category=req.body.category || post.category;
        post.author=req.body.author || post.author;
        post.image=req.body.image || post.image;
        post.updateAt=Date.now()

        const updatepost=await post.save()
        res.json(updatepost)

    } catch (error) {
        res.status(400).json("UPDATE POST LA ERROR"+error)
    }

})

/////////DELETE POST//////////////
router.delete("/:id",async(req,res)=>{

    try {

        const post=await Post.findById(req.params.id)

        if(!post){
            res.status(404).json("Router la post No")
        }
       
        await Post.findByIdAndDelete(post._id)
        res.json("DELETE POST LA SUCCESS")


        
    } catch (error) {
        res.status(500).json(error+"Delete funtion la error")
    }

})

module.exports=router