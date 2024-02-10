import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavPost from './NavPost'

const ViewPost = () => {

    const [input,setInput]=new useState([])
    const getData=()=>{
        axios.get("http://localhost:3000/api/post/viewall").then(
            (response)=>{
                setInput(response.data)
            }
        )


    }
    useEffect(()=>{getData()},[])


  return (
   
    
    <div style={{ backgroundColor: 'grey' }}>
         <NavPost/>
        <div className="container" >

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                   <div className="row g-3">
                    
                    {
                        input.map(
                            (value,index)=>{
                                return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card" style={{ backgroundColor: 'pink' }}>
                                    <p>Name: {value.userId.name}</p>
                                    
                                    <p>Address: {value.userId.address}</p>

                                    <p>post: {value.post}</p>




                                </div>
                            </div>
                            }
                        )



                    }
                    
                    
                    
                    </div> 

        
                       

                </div>
            </div>
        </div>
        

    </div>
  )
}

export default ViewPost