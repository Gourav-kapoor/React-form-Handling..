import React, { useState } from 'react'

function ControlComponents() {
  const [val,SetVal]= useState({name : "", email : ""})
  const handler = (event)=>{
    event.preventDefault();
    console.log(val)
  }
  return (
   <form action="" onSubmit={handler} >
    <input onChange={(event)=>SetVal({...val, name : event.target.value})} type="text"placeholder='name' />
    <input onChange={(event)=>SetVal({...val, email : event.target.value})} type="text" placeholder='email'/>
    <input type="submit" />
   </form>
  )
}

export default  ControlComponents;