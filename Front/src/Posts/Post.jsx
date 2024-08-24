import React, { useEffect, useState } from 'react'
import Card from '../Card/card'
import axios from "axios"

const Post = () => {
     
    const [post,setpost]=useState([])

  const featch_data= async ()=>{
       
  const data=await axios.get("http://localhost:8000/api/Posts")
    
  setpost(data.data)
         
  }

  useEffect(()=>{featch_data()},[])

  console.log(post);
  

    return (
        <div>
  

            <main>
                <div className="container mt-4"/>
                    <div className="row">
                    
                        <div className="col-lg-8">
                            <h1 className="mb-4">Latest Posts</h1>

                             {
                                post.map((post,index)=>(<Card post={post} key={index}/>))
                             }

                           

                        </div>
                       
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">About Me</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>

                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Categories</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item"><a href="#" className="text-black">Category 1</a></li>
                                        <li className="list-group-item"><a href="#" className="text-black">Category 2</a></li>
                                        <li className="list-group-item"><a href="#" className="text-black">Category 3</a></li>
                                    </ul>
                                </div>
                            </div>

                    

                        </div>
                    </div>
            </main>

            {/* <footer className="bg-dark text-white text-center py-3 fixed-bottom ">
                <div className="container">
                    <p>&copy; 2024 My Blog. All rights reserved.</p>
                </div>
            </footer> */}
        </div>
    )
}

export default Post