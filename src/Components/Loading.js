import React from 'react'
import { RotatingTriangles } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div style={{  textAlign: 'center',  marginTop: '250px'}}>
       
  <RotatingTriangles
  visible={true}
  height="100"
  width="100"
  color=" #68b12f"
  ariaLabel="rotating-triangles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />

    <br/>
  <h1 className=' text-secondary fs-3 fw-bolder'>
    Welcome To FinkSupply Solutions
  </h1>
  <p className='text-secondary fs-5 '>
    Logistics and freight services.
    
  </p>
    </div>
  )
}

export default Loading