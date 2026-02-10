import React, { use } from 'react'
import { useState } from 'react'
import "./name.css"

function Dashboard() {

  //defining state 


  let[count,setCount] = useState(0)
  let[change,setChange] = useState("")
  let[select,setSelect] = useState("")
  let [check,setCheck] = useState("");


  //rendering page
  return( 

    
    <div>

      {/* Product name */}

      <p><b>Product: </b>{change}</p>
      <input type="text" onChange={(e)=> setChange(e.target.value) } />
      <div>{count}</div>
      <button onClick={() => { setCount(count + 1) }}>Add</button>
      <button onClick={() => { setCount(count-1) }}>Decrement</button>
      <button onClick={() => { setCount(0) }}>Reset</button> <br /> <br />


      {/* //event handler selection here and they way it performs  */}
      <p>{ select}</p>


       {/* payment methds  */}
      Payment :<select onChange={(e)=> setSelect(e.target.value) }>
        <option value="">select the option</option>
        <option value="Visa">Visa</option>
        <option value="Mtn">MTN</option>
        <option value="cash">Cash</option>

      </select>
      
      {/* status */}
      <p>Martus : {check}</p>
      <div>
        <label htmlFor="ID">Single</label>
        <input type="radio" name="" id="ID" value="single" checked={check === "single"} onChange={(e)=> {setCheck(e.target.value)}}/>
      </div>

      {/*another one */}
      <div>
        <label htmlFor="married">Married</label>
        <input type="radio" name="" id="ID" value="married" checked={check === "married"} onChange={(e) => { setCheck(e.target.value) }} />
      </div>


    </div>
  )
}

export default Dashboard