import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [input,setInput]=new useState(
        {
            name:"",
        age:"",
        mobile:"",
        address:"",
        pin:"",
        email:"",
        password:""
        }

    )
    
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }


    
    const readvalues=()=>{
        axios.post("http://localhost:3000/api/blog/signup",input).then(
            (response)=>{console.log(response.data)
            
            if (response.data.status=="success") {
               alert("Added") 
               
            } 
            else{
                alert("something went wrong")
            }
            
            
            }
        )
    }








  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
        
                    <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />





                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Age</label>
                <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler}/>





                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Mobile</label> 
                <input type="text" className="form-control" name="mobile" value={input.mobile} onChange={inputHandler}/>





                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Address</label>
                <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler} />





                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">PIN</label>
                <input type="text" className="form-control" name="pin" value={input.pin} onChange={inputHandler} />





                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler}/>




                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">PassWord</label>
                <input type="text" className="form-control" name="password" value={input.password} onChange={inputHandler}/>





                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <br/>
                <button className="btn btn-primary" onClick={readvalues}>Register</button>





                </div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <br/>
                Back to <a href="/"><u>login</u></a>





                </div>
            </div>
        </div>
        


    </div>
  )
}

export default SignUp