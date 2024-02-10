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




  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
        
                    <input type="text" className="form-control" />





                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Age</label>
                <input type="text" className="form-control" />





                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Mobile</label> 
                <input type="text" className="form-control" />





                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Address</label>
                <input type="text" className="form-control" />





                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">PIN</label>
                <input type="text" className="form-control" />





                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control" />




                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">PassWord</label>
                <input type="text" className="form-control" />





                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <br/>
                <button className="btn btn-primary">Register</button>





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