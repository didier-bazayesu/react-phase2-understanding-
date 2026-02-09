import React from 'react'
import { useState } from 'react'
import "./name.css"

function Dashboard() {
  let[count,setCount] = useState(0)
  let[change,setChange] = useState("")
  return( 
    <div>
      <p>{change}</p>
      <input type="text" onChange={(e)=> setChange(e.target.value) } />
      <div>{count}</div>
      <button onClick={() => { setCount(count + 1) }}>Add</button>
      <button onClick={() => { setCount(count-1) }}>Decrement</button>
      <button onClick={() => { setCount(0) }}>Reset</button>


    </div>
  )
}

export default Dashboard