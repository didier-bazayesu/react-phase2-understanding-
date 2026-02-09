import React from 'react'
import { useState } from 'react'

function ColorPicker() {
  //state
  let[color,setColor ] = useState("#6a09c5");

  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor:color , width:  "200px" , borderRadius: "5px" , padding: "5px"}}>
             <p>Selected color {color}</p>
             <label htmlFor="">Select color</label>
             <input type="color" name="" id="" value={color} onChange={(event)=>{setColor(event.target.value)}}/>
        </div>
    </div>
  )
}

export default ColorPicker