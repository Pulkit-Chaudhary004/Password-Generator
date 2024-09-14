import { useState, useCallback, useEffect } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [charAllowed, setCharAllowed]=useState(false);
  const [password, setPassword]=useState();


  const passwordGenerate=useCallback(()=>{
    let pass="";
    let string=" ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   
    if (numberAllowed) string+="1234567890";
    if(charAllowed) string+="@#$%^&*_+=!?/~";

  for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random()*string.length+1);
    pass+=string.charAt(char);
    
  }
  setPassword(pass)

},[length,numberAllowed, charAllowed, setPassword])
useEffect(()=>{
  passwordGenerate()}, [length,numberAllowed, charAllowed, setPassword]
)
 
  return (
    <>
    <div className='w-full mx-w-md mx-auto shadow-md px-4 my-8 bg-gray-700'>
   <h1 className="text-white text-center my-3">Password Generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4 text-center">
  <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly />
<button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
</div>

<div className="flex text-sm gap-x-5">
  <div className="flex items-center gap-x-1">
    <input type="range" min={6} max={20} value={length} className="cursor-pointer"  onChange={(e)=>setLength(e.target.value)} />
  <label className="text-white">Length:{length}</label>
  </div>
  <div className="flex items-center gap-x-1">
    <input type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={()=>{
      setNumberAllowed((prev) => !prev) ;
    }}
    />
    <label className="text-white" htmlFor="numberInput">Include Numbers</label>
  </div>

  <div className="flex items-center gap-x-1">
    <input type="checkbox"
    defaultChecked={charAllowed}
    id="Input"
    onChange={()=>{
      setCharAllowed((prev) => !prev) ;
    }}
    />
    <label className="text-white" htmlFor="charInput">Include special characters</label>
  </div>
</div>
    </div>
    </>
  )
}

export default App
