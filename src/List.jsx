import React from 'react'

function List({food}) {

  return (<>
  <div>
    <h2>Fruits items</h2>
    <ul>
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