/* //the way to use of usteState
import { useState } from 'react'
import'./App.css'


function App() {
  const [age, setAge] = useState(0)

 const increaseAge = () => {
    setAge(age + 1);
 }
  
  return (
      <div className="App">
        {age}

        <button onClick={increaseAge}>Increase Age</button>
      </div> )
               
               }
  

export default App
*/


/* // Using useSate to display input on the page
import { useState } from 'react'
import'./App.css'


function App() {
  
 const [inputValue, setInputValue] = useState('')
 const handleInputChange = (event) => {
       setInputValue(event.target.value);
 }
  
  return (
      <div className="App">
        <input type='text' onChange={handleInputChange} />
        {inputValue}
      </div> )
               
               }
  

export default App
*/


/*

import { useState } from 'react'
import'./App.css'


function App() {
  const [textColor, setTextColor] = useState('black')

  
  return (
      <div className="App">
       <button onClick={() => {setTextColor(textColor === 'black' ? 'red' : 'black')}}>show hide</button>
        <h1 style={{color : textColor}}>my name is Charles</h1>


      </div> )
               
               }
  

export default App
*/


/*
// using useSate to increase , decrease, and setting a variable's value to zero
import { useState } from 'react'
import'./App.css'


function App() {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  const setToZero = () => {
    setCount(0)
  }

  
  return (
      <div className="App">
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={setToZero}>set to zero</button>
        {count}
      </div> )
               
               }
  

export default App
*/