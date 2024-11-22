import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
      <div className="container mx-auto">
        <div className="bg-red-600">
          <h1>Your todos</h1>
        </div>
      </div>
    </>
  )
}

export default App
