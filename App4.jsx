import { useState } from 'react'

import'./App.css'

function App() {
  const [count, setCount] = useState(0)
  const names = ["pedro", "George", "Jack", "James"]
  
  return (
      <div className="App">
        {names.map((name, key) => { 
         return <h1 key={key}> {name} </h1>
        })}
        </div> )
      
       }
  

export default App
