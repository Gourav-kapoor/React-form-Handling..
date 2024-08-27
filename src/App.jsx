import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1720048171080-78849cff8b19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "Sahil",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1669842336826-28b52708792a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "forever",
      artist: "Gourav",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1724232547374-69758574fff5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dusk till dawn",
      artist: "Sourav",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1724232547374-69758574fff5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "gangster life",
      artist: "milkha",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);
    const handleClick = (index)=>{
      setSongData((prev)=>{
       return prev.map((item, itemindex)=>{
        if(itemindex === index) return {...item, added : !item.added};
        
        return item ;
       })
      })
    }
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 ">
        <Navbar data={songData} />
        <div className="px-20 flex gap-10 mt-10  flex-wrap">
          {songData.map((obj, index) => (
            <Card data={obj} handleClick= {handleClick} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
