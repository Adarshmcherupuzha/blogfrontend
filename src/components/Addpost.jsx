import React from 'react'
import NavPost from './NavPost'

const Addpost = () => {
  return (
    <div>
        <NavPost/>


        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Enter Post</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br/><button className="btn btn-primary">Upload</button>
                </div>
            </div>
        </div>
        








    </div>
  )
}

export default Addpost