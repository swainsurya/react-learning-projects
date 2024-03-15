import React, { useState } from 'react'

const App = () => {
    const [color,setcolor] = useState("") ;
    let btns = ['Red', 'Green', 'Blue', 'Olive', 'Gray','Yellow','Pink','Purple','Orange', 'Cyan', 'Black']

    let handleColorchange = e => {
        let changeColor = e.target.innerText ;
        setcolor("");
        setcolor(changeColor.toLowerCase());
    }

    return (
        <div>
            <main className='w-[100vw] h-screen bg-black flex flex-col justify-end' style={{backgroundColor:color}}>
                <div className="allbtns w-fit flex flex-row gap-4  bg-white rounded-full mx-auto py-2 px-6">
                    {btns.map(item=>{
                        return <button onClick={handleColorchange} className="rounded-md px-4 py-2 text-white font-bold outline-none" style={{backgroundColor: item.toLowerCase()}}>{item}</button>
                    })}
                </div>
            </main>
        </div>
    )
}

export default App
