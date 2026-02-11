import React from 'react'
import {  travelImage2 } from '../../public/image'

function Entry({values}) {
  return (
    <article className='jaurnal-start '>
      <div className='main-image-container'>
        <img src={values.image} alt="maount fuji" className='main-image' />
      </div>
        
        <div >
         <img src={travelImage2} alt="marker icon" className='google-image-locator'  />
      
        <bold>{values.countryName}</bold>
          <a href={values.googleMap}>View on Google Maps
          </a>

        <h2>{values.titileParagraph}</h2>
          <p>{values.date}</p>
          <p>{values.paragraph}</p>
        </div>
       
    </article>
  )
}

export default Entry