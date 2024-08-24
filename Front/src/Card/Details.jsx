import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Details = () => {

    const [details,setdetails]=useState([])

   const {id}=useParams()

  const featch_data=async ()=>{
     
    try {
        
        const data= await axios.get(`http://localhost:8000/api/Posts/${id}`)
        setdetails(data.data)

    } catch (error) {
        console.log(error+"Single product la error");
        
    }

  }

  console.log(details);
  


  useEffect(()=>{featch_data()},[])

    return (
        <main className="container my-4">
            <div className="row">
                <article className="col-lg-8">
                    <h2 className="blog-post-title">{details.title}</h2>
                    <p className="blog-post-meta">January 1, 2024 by <a href="#">{details.author}</a></p>

                    <img className="mb-3 img-fluid" src={details.image}alt="" />

                    <div className="blog-post-content">
                        <p>{details.content}</p>
                    </div>
                </article>

                <aside className="col-lg-4">
                    <div className="p-4 bg-light">
                        <h3 className="mb-4">Related Posts</h3>


                        <div className="mb-4">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <img src="https://via.placeholder.com/100" className="img-fluid rounded" alt="Related Post Image" />
                                </div>
                                <div className="col">
                                    <h4><a href="#" className="text-decoration-none">Related Post Title 1</a></h4>
                                    <p>Short description or excerpt of the related post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>


                        <div className="mb-4">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <img src="https://via.placeholder.com/100" className="img-fluid rounded" alt="Related Post Image" />
                                </div>
                                <div className="col">
                                    <h4><a href="#" className="text-decoration-none">Related Post Title 2</a></h4>
                                    <p>Short description or excerpt of the related post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </aside>
            </div>
        </main>
    )
}

export default Details