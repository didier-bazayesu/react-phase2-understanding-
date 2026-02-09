import React from 'react'
import { useState } from 'react'
import "./name.css"

function Dashboard() {
  let[count,setCount] = useState(0)
  return( 
    <div>
      <div>{count}</div>
      <button onClick={() => { setCount(count + 1) }}>Add</button>
        <button>Decrement</button>
          <button>Reset</button>

    </div>
  )
}

export default Dashboard