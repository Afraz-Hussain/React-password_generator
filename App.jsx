//PASSWORD GENERATOR IN REACT...
import React, { useCallback, useEffect, useState,useRef } from 'react';
import './App.css'
const App = () => {

const passwordRef=useRef(null)
const[length,setlength]=useState('')
const[number,setnumber]=useState(false)
const[Alphabets,setalphabets]=useState(false)
const[symbol,setsymbol]=useState(false)
const[password,setpassword]=useState(" ")

const passwordgenerator=useCallback(()=>{
  let str=" ";
  let pass=" ";
  if(number){
    str+="0123456789"
  }
  if(Alphabets){
    str+="ABCDEFGHIJKLMONOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }
  if(symbol){
    str+="!@#$%^&*(){}?/><:|\][";
  }
  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setpassword(pass)
},[length,number,symbol,Alphabets])

const copypassword=useCallback(()=>{
passwordRef.current?.select()
const copy=window.navigator.clipboard.writeText(password)
},[password])


useEffect(()=>{
passwordgenerator()
},[length,number,symbol,Alphabets])


  return (
    <div>
      <h1 style={{ color: "red" }}>Password Generator in React JS</h1>
     <input type='text' value={password} placeholder='pass' id='inpbar'
     
     ref={passwordRef}
     />
     <button className='btn1' onClick={copypassword}>Copy</button>
<br/>
     <label style={{color:"white"}}>length {length}</label>
     <input type='range' onChange={(e)=>{setlength(e.target.value)}}
     min={6} max={25}
     
     />
    
     <label style={{color:"white"}}> number{number}</label>
     <input type='checkbox' 
     onChange={()=>setnumber((prev)=>!prev)} 
     
     />

     <label style={{color:"white"}}>Alpabet {Alphabets}</label>
     <input type='checkbox'  
     
     onChange={()=>{
      setalphabets((prev)=>!prev)
      }}
     />

     <label style={{color:"white"}}>symbol {symbol}</label>
     <input type='checkbox'  
     
     onChange={()=>{
      setsymbol((prev)=>!prev)
      }}
     />
   
    </div>
  );
}

export default App;
