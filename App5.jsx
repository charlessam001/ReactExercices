import { useState } from 'react'

import'./App.css'

function App() {
  const [count, setCount] = useState(0)
  const users =  [{name : "pedro", age : 21}, 
                  {name : "George", age : 17}, 
                  { name : "Jack", age :  31}, 
                  {name : "James", age : 32}
                ] 
  
  return (
      <div className="App">
        {users.map((user, key) => { 
         return <div>{user.name} {user.age}</div>
        })}
        </div> )
      
       }
  

export default App
