import React, { useRef } from 'react'

function UseRefExample () {
  const name = useRef(null);
  const age = useRef(null);
  const handleSubmit =(details)=>{
    details.preventDefault();
    console.log(name.current.value, age.current.value)
  }
  return (
   <form action="" onSubmit={handleSubmit}>
    <input ref={name} type="text"placeholder='name' />
    <input ref={age} type="text" placeholder='age'/>
    <input type="submit" />
   </form>
  )
}

export default UseRefExample;