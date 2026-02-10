import { func } from 'prop-types';
import React, { useState } from 'react'


function DashboardOrder() {

    const foods = [ "Pizza", "Burger", "Pasta"];
    let[food,setFood] = useState(foods);
    function handle_value(){
        const target = document.getElementById('value').value
        setFood(function(array){
              return[
                ...array,
                target
              ]
        })

    }

  return (
    <div>
        <h1>List of items </h1>
        <ul>
           {food.map((elem,index)=> <li key={index}>{elem}</li>)}   
        </ul>
        <input type="text" name="" id="value"  placeholder='Add on list ...' />  
          <button onClick={handle_value}>Add</button>
    </div>
  )
}

export default DashboardOrder