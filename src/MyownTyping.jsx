

import React,{useState, createElement} from 'react'
import { words } from './Typing';

function MyownTyping() {

    const setElement = createElement("h1",null,"hello my day")
    console.log(setElement);

    
    let [input,setinput] = useState("");
    function handleInput(e){
        setinput(e.target.value);
    }
  return (
    <div>
     <span>
        
        {
        
        words.slice(0,1).join("").split("").map((Char,ind)=>{
            if (input.length < 1) return <p className='black'>{Char}</p>
         else if(Char === input ) return <p className='blue'>{Char}</p>
          else return <p className='red'>{Char}</p>
        })
        
        }</span> <br />
        <input type="text" onChange={handleInput} placeholder='start typing ....' />
    </div>
  )
}

export default MyownTyping