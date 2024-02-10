import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-labe1">Email Id</label>
                    <input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-labe1">password</label>
                <input type="password" className="form-control" />


                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br/>
                    <button className="btn btn-primary">Login</button>
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