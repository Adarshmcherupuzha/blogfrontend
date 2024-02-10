import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const [input,setInput]=new useState(
    {
        email:"",
        password:""
    }
    )

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readvalues=()=>{
        axios.post("http://localhost:3000/api/blog/signin",input).then(
            (response)=>{console.log(response.data)
            
            if (response.data.status=="invalid user") {
               alert("invalid email") 
               
            } else if(response.data.status=="invalid password") {
                alert("invalid password")
                
            }
            else{
                console.log(response.data.userdata._id)
                // navigate("/addpost")
            }
            
            
            }
        )
    }



  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-labe1">Email Id</label>
                    <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-labe1">password</label>
                <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler}/>


                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br/>
                    <button className="btn btn-primary" onClick={readvalues}>Login</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br/>

                    New user <a href="/signup"><u>click here</u> </a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login