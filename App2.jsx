// a way to make condition in react especially for color 
import { useState } from 'react'

import'./App.css'

function App() {
  const [count, setCount] = useState(0)
  const age = 17
  const isGreen = true;
  // { age >= 18 ? <h1>OVER_AGE</h1> : <h1>UNDER_AGE</h1>} : is among conditions we observed in the code
  return (
      <div className="App">{ age >= 18 ? <h1>OVER_AGE</h1> : <h1>UNDER_AGE</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}> THIS HAVE COLOR </h1>
      </div> )
      
       }
  

export default App
