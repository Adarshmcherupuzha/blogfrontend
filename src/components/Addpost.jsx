import React, { useState } from 'react'
import NavPost from './NavPost'
import axios from 'axios'

const Addpost = () => {
    const [input,setInput]=new useState(
        {
            userId:sessionStorage.getItem("userId"),
            post:""
        }
        )
    
        const inputHandler=(event)=>{
            setInput({...input,[event.target.name]:event.target.value})
        }


        const readvalues=()=>{
            axios.post("http://localhost:3000/api/post/add",input).then(
                (response)=>{console.log(response.data)
                
                if (response.data.status=="success") {
                    alert("posted")
                    setInput({
                        post:""
                    })
                   
                   
                
                    
                }
                else{
                   alert("ERROR")
                     
                }
                
                
                }
            )
        }
    




  return (
    <div>
        <NavPost/>

        <img src="https://t4.ftcdn.net/jpg/03/41/47/73/360_F_341477352_FPoRvWnWWqdzVFnIWn3on34gYWaSEX2K.jpg" alt='...'/>
        <div className="container">
            <div className="row">
           

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label"><h1>Enter Post</h1></label>
                    <input type="text" className="form-control" name="post" value={input.post} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br/><button className="btn btn-primary" onClick={readvalues}>Upload</button>
                </div>
            </div>
        </div>
        








    </div>
  )
}

export default Addpost