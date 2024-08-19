import React from 'react'

function Card({text, color}) {
  return (
  <button className={`'px-3 ${color} py-1 text-zinc-100 text-xs rounded m-2`} >{text}</button>
  )
}

export default Card