import React from 'react'

const ProductCard = (imageUrl,productTitle,productPrice) => {
  return (
    <div style={{
      border:"1px solid blue",
      height:"300px",
      width:"300px",
      alignContent:"center"
    }}>
        <img width="90px" height="100px" src="{imageUrl}" alt="" />
        <h3>Title: {productTitle}</h3>
        <p>Price: {productPrice}</p>
    </div>
    
  )
}

export default ProductCard
