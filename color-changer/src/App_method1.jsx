import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"

function App() {
  const [color, setColor] = useState("");
  let bodyref = useRef("red") ;

  let handleBtnClick = e => {
    setColor("");
    setColor(e.target.innerText) ;
  }


  return (
    <>
      <div className="main h-[100vh] bg-black flex flex-col justify-between items-center" style={{backgroundColor : color}}>
        <div></div>
        <div className="col_btn bg-white flex flex-row justify-between w-[70vw] m-auto p-4 rounded-full">
          <button onClick={handleBtnClick} className="bg-red-700 rounded-md px-4 py-2 text-white font-bold">Red</button>
          <button onClick={handleBtnClick} className="bg-green-700 rounded-md px-4 text-white font-bold">Green</button>
          <button onClick={handleBtnClick} className="bg-blue-700 rounded-md px-4 text-white font-bold">Blue</button>
          <button onClick={handleBtnClick} className="bg-yellow-800 rounded-md px-4 text-white font-bold">Olive</button>
          <button onClick={handleBtnClick} className="bg-gray-700 rounded-md px-4 text-white font-bold">Gray</button>
          <button onClick={handleBtnClick} className="bg-yellow-500 rounded-md px-4 text-white font-bold">Yellow</button>
          <button onClick={handleBtnClick} className="bg-pink-700 rounded-md px-4 text-white font-bold">Pink</button>
          <button onClick={handleBtnClick} className="bg-purple-700 rounded-md px-4 text-white font-bold">Purple</button>
          <button onClick={handleBtnClick} className="bg-blue-300 rounded-md px-4 text-white font-bold">Lavender</button>
          <button onClick={handleBtnClick} className="bg-slate-400 rounded-md px-4 text-white font-bold">White</button>
          <button onClick={handleBtnClick} className="bg-black rounded-md px-4 text-white font-bold">Black</button>
        </div>
      </div>
    </>
  )
}

export default App
