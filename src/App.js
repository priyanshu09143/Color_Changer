import { useState } from 'react';
import './App.css';

function App() {

  let [color , setColor] = useState("white")

  return (
    <>
    <div className="max-w-full h-screen flex flex-col items-center" style={{background : color}} >
      <h1 className="text-4xl font-bold underline text-center p-4 text-slate-600 ">
   Color Changer 
    </h1>
    <div className='bg-white w-5/6 rounded-md p-3 '>
      <button className='mx-5 bg-red-600 text-white rounded text-2xl px-4 py-2s shadow-slate-500 shadow-inner' onClick={()=>{ setColor("red")}}>Red</button>
      <button className='mx-5 bg-blue-600 text-white rounded text-2xl px-4 py-2s shadow-slate-500 shadow-inner' onClick={()=>{ setColor("blue")}}>Blue</button>
      <button className='mx-5 bg-green-600 text-white rounded text-2xl px-4 py-2s shadow-slate-500 shadow-inner' onClick={()=>{ setColor("green")}}>Green</button>
      <button className='mx-5 bg-purple-600 text-white rounded text-2xl px-4 py-2s shadow-slate-500 shadow-inner' onClick={()=>{ setColor("purple")}}>Purple</button>
      <button className='mx-5 bg-purple-300 text-white rounded text-2xl px-4 py-2s shadow-slate-500 shadow-inner' onClick={()=>{ setColor("pink")}}>lavender</button>
      <button className='mx-5 bg-yellow-600 text-white rounded text-2xl px-4 py-2s shadow-slate-500 shadow-inner' onClick={()=>{ setColor("yellow")}}>yellow</button>
      <button className='mx-5 bg-orange-600 text-white rounded text-2xl px-4 py-2s shadow-slate-500 shadow-inner' onClick={()=>{ setColor("orange")}}>Oranger</button>
      <button className='mx-5 bg-white text-black rounded text-2xl px-4 py-2s shadow-slate-500 shadow-inner' onClick={()=>{ setColor("white")}}>White</button>
      <button className='mx-5 bg-sky-500 text-white rounded text-2xl px-4 py-2s shadow-slate-500 shadow-inner' onClick={()=>{ setColor("#00afff")}}>Sky</button>
    </div>
    </div>
    
  
    </>
  );
}

export default App;
