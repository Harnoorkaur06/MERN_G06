// SPA---> single page application

import Counter from "./Counter"
import NameChanger from "./NameChanger"

// jsx--> javascript xml
function App(){
  const name="Noor"
  const age=21
  let islogged=true
  return(
    <>
      <h1>Hello world</h1>
      <h2>Hi i'm {name} and i'm {age} years old</h2>
      <Counter/>
      <NameChanger/>
      
      {/* {
        islogged ? <h1>Welcome {name}</h1> : <h2>Access Denied</h2>
      } */}
    </>
  )
}

export default App