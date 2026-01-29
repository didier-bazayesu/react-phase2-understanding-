import React,{useState} from 'react'
import { words } from './Typing';

function MyownTyping() {

    
    let [input,setinput] = useState("");
    function handleInput(e){
        setinput(e.target.value);
    }
  return (
    <div>
     <span>{words.slice(0,7).join(" ")}</span>
        <input type="text" onChange={handleInput} placeholder='start typing ....' />
    </div>
  )
}

export default MyownTyping