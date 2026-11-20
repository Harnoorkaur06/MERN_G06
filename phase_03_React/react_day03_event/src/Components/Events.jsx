import React, { useState } from 'react'

const Events = () => {
    //usestate --> to initialise and set any value
    const [text,setText]=useState("")
    const handleClick=(name)=>{
        alert(`Welcome ${name}`)
    }
    const handleChange=(e)=>{
        console.log(e.target.value)
        setText(e.target.value)
    }

  return (
    <div>
      <button onClick={()=>handleClick("Aman")}>Greet Aman</button>
      <input type="text" placeholder='Enter Name: '
      onChange={handleChange}
      />
      <br />
      <h2>Text: {text}</h2>
    </div>
  )
}

export default Events
