import React, { use } from 'react'
import { useState } from 'react'
import "./name.css"

function Dashboard() {
  let[count,setCount] = useState(0)
  let[change,setChange] = useState("")
  let[select,setSelect] = useState("")
  return( 
    <div>
      <p><b>Product: </b>{change}</p>
      <input type="text" onChange={(e)=> setChange(e.target.value) } />
      <div>{count}</div>
      <button onClick={() => { setCount(count + 1) }}>Add</button>
      <button onClick={() => { setCount(count-1) }}>Decrement</button>
      <button onClick={() => { setCount(0) }}>Reset</button> <br /> <br />


      {/* //event handler selection here and they way it performs  */}
      <p>{ select}</p>

      Payment :<select onChange={(e)=> setSelect(e.target.value) }>
        <option value="">select the option</option>
        <option value="Visa">Visa</option>
        <option value="Mtn">MTN</option>
        <option value="cash">Cash</option>

      </select>


    </div>
  )
}

export default Dashboard