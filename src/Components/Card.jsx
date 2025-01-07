import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
      <img src="https://as1.ftcdn.net/v2/jpg/06/76/17/50/1000_F_676175047_ZdJDBYHhQJOSooTjU28r1ZxMMtN8Cfyt.jpg" alt="" height={100} width={350} style={{border:"2px solid black"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}
export default Card
