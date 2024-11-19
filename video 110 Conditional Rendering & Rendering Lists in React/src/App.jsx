import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)

  const [todos, settodos] = useState([
    {
      title: "hey",
      desc: "i am great todo"
    },
    {
      title: "hey 2",
      desc: "i am great todo 2"
    },
    {
      title: "hey 3",
      desc: "i am great todo 3"
    },
  ])


  // const Todo = ({todo})=>{
  //   return(
  //     <>
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </>
  //   )
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>button true</button> : <button>button false</button>}
      {/* you can write in this way for now */}
      {/* {showbtn && <button>I will be shown only if the 2nd button is clicked</button>} */}


      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        // commented out because, we dont do like this ideally
        return <div key={todo.title} >
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      })}








      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          show/notshow
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
