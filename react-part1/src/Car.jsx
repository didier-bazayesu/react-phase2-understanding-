import { object } from 'prop-types'
import React from 'react'
import { useState } from 'react'

function Car() {
    let[car,setCar] = useState({ name: "toyota" , 
                                 model: "BENZ",
                                 cost: 350 
                                 })
  return (
    <div>
          <p> <b>Name:</b> {" " + car.name + " "}  <b>Model : </b>{car.model}
              <b> Cost : </b>{car.cost}</p>

              <input type="text" name="" id="" value={car.name}  onChange={(e)=>{
                   setCar(function(obj){
                       return {
                        ...obj,
                        name: e.target.value
                       }
                   })
                }}/>


                {/* //model */}

          <input type="text" name="" id="" value={car.model} onChange={(e) => {
              setCar(obj=>({              
                      ...obj,
                      model: e.target.value 
              }))
          }} />

     {/* cost */}

          <input type="text" name="" id="" value={car.cost} onChange={(e) => {
              setCar(obj => ({
                  ...obj,
                  cost: e.target.value
              }))
          }} />

    </div>
  )
}

export default Car