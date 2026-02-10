import React from 'react'

function MainContent() {
    let array = [
      "Was first released in 2013",
        'Was orginally created',
        'It mentained by Meta',
        "Poowers thousands of enterprise apps ,including mobile apps"
    ]

  return ( 
    <main className='backgroun-image' >
        <h1>Fun facts about React</h1>
          <ul className='fan-facts'>
            {array.map((elem,index)=> <li key={index}>{elem}</li>)}
        </ul>
    </main>
  )
}

export default MainContent