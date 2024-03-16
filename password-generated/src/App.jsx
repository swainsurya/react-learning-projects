import React, { useCallback, useEffect, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const [password, setPassword] = useState("");

  // use callback
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "`@#$%^&*()_+?><|}{!:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numAllow, charAllow, setPassword]);

  // use effect 

  useEffect(() => {
    passwordGenerator() ;
  },[length,numAllow,charAllow,setPassword]) ;

  return (
    <>
      <main className='h-screen bg-black py-4'>
        <div className='bg-gray-900 text-center w-[40vw] m-auto rounded-md flex flex-col'>
          {/* First box */}
          <h2 className='text-white font-bold text-xl'>Password Generator</h2>
          <div className="firstbox mb-5">
            <input type="text" className='w-[350px] text-xl p-1 rounded-l-md outline-none' readOnly placeholder='Password' value={password} />
            <button className='text-xl font-bold bg-blue-600 p-1 rounded-r-md px-2 text-white hover:bg-blue-700'>Copy</button>
          </div>

          {/* Second Box */}

          <div className='flex flex-row gap-x-2 items-center text-xs mx-8 my-4'>
            <input type="range" name="" id="" min={8} max={20} value={length} className='cursor-pointer bg-orange-600' onChange={e=>{
              setLength(e.target.value) ;
            }}/>
            <label className='font-bold text-xl text-orange-600 cursor-pointer'>length:{length}</label>

            {/* Number check box */}
            <div className="numcheckbox flex items-center gap-1">
              <input type="checkbox" name="number" id="" className='cursor-pointer' onChange={() => {
                setNumAllow((prev) => !prev) ;
              }} />
              <label htmlFor="number" className='font-bold text-xl text-orange-600 cursor-pointer'>Number</label>
            </div>

            {/* Char check box  */}

            <div className="charbox flex items-center gap-1 hover:cursor-pointer">
              <input type="checkbox" name="char" id="" className='cursor-pointer' onChange={() => {
                setCharAllow(prev => !prev) ;
              }} />
              <label htmlFor="char" className='font-bold text-xl text-orange-600 cursor-pointer'>Character</label>
            </div>

          </div>

        </div>
      </main>
    </>
  )
}

export default App
