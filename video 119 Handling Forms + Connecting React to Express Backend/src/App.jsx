import { useState } from 'react'
import { useForm } from "react-hook-form";

import './App.css'

function App() {
  const { register, handleSubmit,setError, watch, formState: { errors , isSubmitting} } = useForm();


  const delay = (d) =>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve();
      }, d*1000);    
    })   
  }
  const onSubmit = async(data) => {
    // await delay(2); //simulating network delay
    let r = await fetch("http://localhost:3000/", {method:"POST", body: JSON.stringify(data)}
    )
    let res = await r.text()

    console.log(data, res);
    // if(data.username !== "shubham")   
    // {
    //   setError("myForm",{message: "invalid credentials, username, password doesnt match"});

    // }

    // if(data.username === "rohan"){
    //   setError("blocked", {message:"user is blocked"})
    // }

  };

  const [count, setCount] = useState(0)   

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username ' {...register("username",{ required: {value: true, message:"fill username please"}, minLength:{value:3, message:"Min length is 3"} , maxLength:{value:10, message:"Max length is 10"}} ) } type="text"/> 
          {errors.username && <div className='red'>{errors.username.message }</div> }
          <br />
          <input placeholder='password' {...register("password", {minLength:{value:3, message:"Min length is 3"}})} type="password" /> <br />
          {errors.password && <div className='red'>{errors.password.message }</div> }
          <input disabled={isSubmitting} type="submit" value="Submit" />

          {errors.myForm && <div className='red'>{errors.myForm.message }</div> }
          {errors.blocked && <div className='red'>{errors.blocked.message }</div> }

        </form>

      </div>
      
    </>
  )
}

export default App
