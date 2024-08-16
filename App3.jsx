// another way to create condition in jsx with && 
import { useState } from 'react'

import'./App.css'

function App() {
  const [count, setCount] = useState(0)
  const age = 17
  const isGreen = true;
  
  return (
      <div className="App">
      {isGreen && <button>THIS IS A BUTTON</button>}
      </div> )
      
       }
  

export default App
