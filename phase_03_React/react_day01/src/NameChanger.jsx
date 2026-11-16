import { useState } from "react"

function NameChanger(){
    const [NameChange,setNameChange]= useState("Harnoor")

    const handleName=()=>{
        setNameChange("Namya")
        
    }

    return(
        <>
        <h1>Hi {NameChange}</h1>
        <button onClick={handleName}>ChangeName</button>
        </>
    )
}
export default NameChanger