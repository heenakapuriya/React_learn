import { useState } from "react"

function Bgcolor() {

  const [color, setColor] = useState("pink")

  return (
    <>
      <div className="w-full h-screen text-center flex justify-center" style={{ backgroundColor: color }}>
        <div className="bg-white fixed top-10 px-3 py-3 rounded-xl text-lg flex justify-center border-black-500 shadow-xl ">
          <div className="flex gap-4 justify-center">
          <button onClick={()=>setColor("red")} className="text-lg outline-none shadow-xl py-1 px-3 rounded-full" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={()=>setColor("yellow")} className="text-lg  outline-none shadow-xl py-1 px-3 rounded-full" style={{ backgroundColor: "yellow" }}>yellow</button>
          <button onClick={()=>setColor("purple")} className="text-lg outline-none shadow-xl py-1 px-3 rounded-full" style={{ backgroundColor: "purple" }}>purple</button>
          <button onClick={()=>setColor("olive")} className="text-lg outline-none shadow-xl py-1 px-3 rounded-full" style={{ backgroundColor: "olive" }}>olive</button>
          <button onClick={()=>setColor("pink")}  className="text-lg outline-none shadow-xl py-1 px-3 rounded-full" style={{ backgroundColor: "pink" }}>pink</button>
          <button onClick={()=>setColor("white")} className="text-lg outline-none shadow-xl py-1 px-3 rounded-full" style={{ backgroundColor: "white" }}>white</button>
          <button onClick={()=>setColor("green")} className="text-lg outline-none shadow-xl py-1 px-3 rounded-full" style={{ backgroundColor: "green" }}>green</button>
          <button onClick={()=>setColor("blue")} className="text-lg outline-none shadow-xl py-1 px-3 rounded-full" style={{ backgroundColor: "blue" }}>blue</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Bgcolor
