import { useState } from 'react'
import { useForm } from "react-hook-form";

import './App.css'

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);


  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <form action={handleSubmit(onSubmit)}>
          <input placeholder='username ' {...register("username"),{ required: true, minLength:{value:3, message:"Min length is 3"} , maxLength:{value:10, message:"Max length is 10"}}  } type="text"/> <br />
          <input placeholder='password' {...register("password")} type="password" /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
