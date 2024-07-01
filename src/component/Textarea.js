import React, { useState } from 'react'


export default function Textarea(props) {
  const[text,setText] =useState();
  function cleartext(){
    setText(" ")
  }
  function textcopy()
  {
    let text= document.getElementById('exampleFormControlTextarea1').value;
    navigator.clipboard.writeText(text)
  }
  return (
    <div className={props}>
      <>
      <div className="mb-3">
     <textarea className={`"form-control p-3 ${props}"`} id="exampleFormControlTextarea1" value={text} cols="130" rows="8"></textarea>
     <button class="btn btn-dark  mx-4 border-top border-info" onClick={cleartext}>Clear</button>
     <button class="btn btn-dark mx-4 border-top border-info" onClick={textcopy}>Copy</button>
     </div>
      </>
    </div>
  )
}
