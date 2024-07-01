import Navbar from "./component/Navbar";
import Textarea from "./component/Textarea";
import React, { useState } from 'react'


function App() {
  const[mode,setmode] =useState('bg-light text-dark')
  

  function changemode()
  {
    if(mode==="bg-light text-dark")
      {
        setmode("bg-dark text-light")
      }
      else{
        setmode("bg-light text-dark")
      }
  }
 


  return (
  <>
  
  <div className={`vh-100 vw-100 ${mode}`}>
   <div className="container">
  <Navbar mode={mode}/>
  <button type="button" class="btn btn-dark my-4 border-top border-info" onClick={changemode} >Dark mode </button>
  <Textarea mode={mode} />
   </div>
  </div>
  </>
  );
}

export default App;
