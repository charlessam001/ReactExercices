//importing a component User in our App.jsx file
import { useState } from 'react'

import'./App.css'
import {User} from './User'

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
         return <User name={user.name} age={user.age}/>
        })}
        </div> )
       }
  

export default App
