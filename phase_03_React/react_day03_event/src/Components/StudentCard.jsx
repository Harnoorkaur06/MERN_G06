import React from 'react'

const StudentCard = ({std}) => {
  return (
    <div>
            
        <img src={std.url} alt="" />
        <h2>Name: {std.name}</h2>
        <h3>Email: {std.email}</h3>
        <p>Age: {std.age}</p>
                
            
      </div>
  )
}

export default StudentCard
