import { func } from 'prop-types'
import React from 'react'
import "./name.css"

function List({food}) {
  function handleOver(){
    return <h1 className='handle-name'>This page is created by didier</h1>
  }

  return (<>
  <div>
    <h2>Fruits items</h2>
    <ul onMouseOver={handleOver}>
    {food.fruits.map(elem=> <li key={Math.random()*5}>{elem}</li>)}
    </ul>
  </div>
  <div>
    <h2>Vegetables</h2>
          <ul>
              {food.vegetables.map(elem => <li key={Math.random()*4}>{elem}</li>)}
          </ul>
  </div>
      
    </>
  )
}

export default List