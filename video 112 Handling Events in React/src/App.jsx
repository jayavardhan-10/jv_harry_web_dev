import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("my name")
  const [form, setForm] = useState({email:" ", phone:""})
  const handleClick = () =>{
    alert("hey i am click")
  }
  const handleMouseOver = () =>{
    alert("hey you just came over me")
  }
  
  // // here take the input into the function and display the vlaue of it
  // const handleChange = (e) =>{
  //   setName(e.target.value)
    
  // }
  // here take the input into the function and display the vlaue of it
  const handleChange = (e) =>{
    
    setForm({...form, [e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        i am a red div hover over me please
      </div> */}

      {/* <input type="text" name='email'  value={form.email} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone} onChange={handleChange}/> */}
      <input type="text" name='email'  value={form.email?form.email=""} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone?form.phone=""} onChange={handleChange}/>
    </>
  )
}

export default App
