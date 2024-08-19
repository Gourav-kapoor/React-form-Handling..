import React from 'react'
import Card from './components/Card';

function App() {

  const data=[
    {name: "john", profession: "painter", image: "https://images.unsplash.com/photo-1509768368676-f3c3b060679d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D"},
    {name: "rahul", profession: "carpainter", image: "https://images.unsplash.com/photo-1715454000430-4b5109c29060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D"},
    {name: "gourav", profession: "plumber", image: "https://images.unsplash.com/photo-1716660664854-31beab15eb1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D"},
    {name: "sourav", profession: "driver", image: "https://images.unsplash.com/photo-1682251096914-41c7c3d17e42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww "}
  ];
  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
         {data.map((item, index)=>(
          <Card image={item.image} name={item.name} profession={item.profession}/>
          ))}
    </div>
    </>
 
  )
}

export default App