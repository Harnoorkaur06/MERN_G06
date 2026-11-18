import React from 'react'

const navbar = () => {
  return (
    <div style={{
      border:"1px solid black",
      display:"flex",
      justifyContent:"end",
      gap:"20px",
      padding:"10px"
    }}>
      <p>Home</p>
      <p>Products</p>
      <p>Cart</p>
      <p>Profile</p>
    </div>
  )
}

export default navbar
