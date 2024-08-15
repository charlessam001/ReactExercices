//a way of creating react's component function 
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
      <div className="App">
      <User name='benj' age={21} email='nenj@moses.com'/>
      <User name='Joe' age={25} email='Joe@call.com'/>
      <User name='Biger' age={24} email='bigj@clll.com'/>
      </div>
  )
}

const User = (props) => {
  return (
  <div>
  <h1>{props.name}</h1>
  <h1>{props.age}</h1>
  <h1>{props.email}</h1>
  </div>
  )
}
export default App
