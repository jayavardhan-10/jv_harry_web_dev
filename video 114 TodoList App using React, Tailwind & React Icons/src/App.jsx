import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import {v4 as uuidv4} from 'uuid'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";


function App() {
  
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true);
  
  // to saveto the local storage
  const saveToLs = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  
  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  

  // a first time running USEEFFECT to load todo data
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){

      let todos  = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  const handleEdit = (e,id)=>{
    let t = todos.filter(i=>i.id ===id)
    setTodo(t[0].todo)
    
    // you jsut delete the previous one
    let newTodos = todos.filter(item=>{
      return item.id!==id;
    });
    setTodos(newTodos)
    saveToLs();
  }
  const handleDelete = (e,id)=>{
    let newTodos = todos.filter(item=>{
      return item.id!==id;
    });
    setTodos(newTodos)
    saveToLs();
  }
  const handleAdd = ()=>{
    setTodos([...todos, { id:uuidv4(), todo, isCompleted:false}])
    setTodo("")
    console.log(todos)
    saveToLs()
  }
  const handleChange = (e)=>{
    
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name ;
    let index = todos.findIndex(item=>{
      return item.id ===id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLs()
  }
  

  return (
    <>
    <Navbar/>
      <div className="mx-5 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]  md:w-[35%]">
      <h1 className='font-bold text-center text-xl'>Tasker - Your tasks tracker</h1>
        <div className="addTodo my-5 flex flex-col gap-4">

          <h2 className='text-lg font-bold ' >Add a Todo</h2>
          <input type="text " className='w-full rounded-lg px-5 py-1' onChange={handleChange} value={todo}/>
          <button onClick={handleAdd} disabled={todo.length<1} className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-600 transition-all p-2 py-1 text-sm font-bold text-white rounded-md hover:mx-6 cursor-pointer ' >Save</button>
        </div>

        <input onChange={toggleFinished} type="checkbox" id='show' checked={showFinished} />
        <label className='m-2 ' htmlFor="show">Show Finished</label>
        <div className='h-[1px] bg-black opacity-15 my-2 mx-auto w-[90%]' ></div>
        <h2 className=' text-lg font-bold my-4'>Your todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
          {todos.map(item=>{

            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex  my-3 justify-between">
              <div className='flex gap-5'>
              <input type="checkbox" name={item.id} onChange={handleCheckbox} checked={item.isCompleted}  id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              </div>
            <div className="buttons flex h-full">
              <button className='bg-violet-800 hover:bg-violet-950 transition-all p-2 py-1 text-sm font-bold text-white rounded-md mx-1' onClick={(e)=>handleEdit(e,item.id)} ><FaEdit /></button>
              <button className='bg-violet-800 hover:bg-violet-950 transition-all p-2 py-1 text-sm font-bold text-white rounded-md mx-1' onClick={(e)=>{handleDelete(e,item.id)}} ><AiFillDelete /></button>
            </div>
          </div>
          })}
        </div>
        

      </div>
    </>
  )
}

export default App
