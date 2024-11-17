import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card' style={{backgroundColor:"gray", overflow:"hidden", border:"1px solid black"}}>
        <img src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww" alt="" width={270} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card
