import React, { useState } from 'react'
import StudentCard from './StudentCard'

const StudentForm = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[age,setAge]=useState("")
    const[url,setUrl]=useState("")
    const [student,setStudent]=useState(null)

    const handleSubmit=(event)=>{
        event.preventDefault()
        setStudent({
            name,
            email,
            age,
            url
        })
        //{name:name==> name:"rahul"}
    }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{
        border:"1px solid black",
        height:"500px",
        width:"400px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"

      }}>
        <label htmlFor="">Name:</label>
        <input type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input type="text" 
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">ImageUrl:</label>
        <input type="text"
        value={url}
        onChange={(e)=>setUrl(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      <div>
            {
                
                student && <div>
                    <StudentCard std={student} />
                </div>
            }
      </div>
    </div>
  )
}

export default StudentForm
