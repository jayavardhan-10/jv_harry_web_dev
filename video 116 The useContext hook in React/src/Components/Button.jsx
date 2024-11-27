import React, { useContext } from 'react'
import { counterContext } from '../context/context'
import Component1 from './Component1'
const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
        <button onClick={()=>setCount((count)=> count+1)}>
        click
      <Component1/>
        </button>
    </div>
  )
}

export default Button
