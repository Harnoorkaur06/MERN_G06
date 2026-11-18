import React from 'react'
import Navbar from './Components/NavbarPage'
import Footer from './Components/FooterPage'
import ProductCard from './Components/ProductCard'

const App = () => {
  const Products=[
    {url:"https://www.brandmall.in/cdn/shop/files/Dior_Lip_Glow_Butter_Hydrating_Gloss_Balm_102_Glazed_Lavender.png?v=1774624673",
    title:"Dior gloss",
    price:"$123"},
    {url:"https://www.brandmall.in/cdn/shop/files/Dior_Lip_Glow_Butter_Hydrating_Gloss_Balm_102_Glazed_Lavender.png?v=1774624673",
    title:"ysl gloss",
    price:"$189"},
    {url:"https://www.brandmall.in/cdn/shop/files/Dior_Lip_Glow_Butter_Hydrating_Gloss_Balm_102_Glazed_Lavender.png?v=1774624673",
    title:"ysl gloss",
    price:"$189"},
    {url:"https://www.brandmall.in/cdn/shop/files/Dior_Lip_Glow_Butter_Hydrating_Gloss_Balm_102_Glazed_Lavender.png?v=1774624673",
    title:"ysl gloss",
    price:"$189"},

  ]
  return (
    <div style={{
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",

    }}>
      <Navbar/>
      <div style={{
      display:"flex",
      gap:"20px"
    }}>
      
      
      
      {
        Products.map((el)=>{
          return <ProductCard imageUrl={el.url} productTitle={el.title}
          productPrice={el.price}
          />
        })
      }
    </div>
    <Footer/>
    </div>
  )
}

export default App
