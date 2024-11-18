import React1, {useEffect} from 'react'

const Navbar = ({color}) => {

    useEffect(() => {
      alert("color was changed")
    }, [color])
    

      // case:1 runs on every render
    useEffect(() => {
        alert("Hey i run on every render")
    })

    // case:2 run only on first render
    useEffect(() => {
        alert("Hey welcome i run on first render only")
    }, [])
    
    //case:3 run only on certain values change
    // lets write a new useEffect for , count change
    useEffect(() => {
        alert("Hey i am running as color was changed")
    }, [color])
    
    // Example of Cleanup function
    useEffect(() => {
        alert("Hey welcome i, this is the first render of app.jsx")
        return ()=>{
          alert("component was unmounted")
        }
    }, [])

  return (
    <div>
      i am navbar of color {color}
    </div>
  )
}

export default Navbar
