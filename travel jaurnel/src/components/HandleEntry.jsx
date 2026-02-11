import React from 'react'
import Entry from './Entry'
import entryData from '../travleInform/travelInformation'


function HandleEntry() {

  
  return (
    <>
     {entryData.map((elem,index)=> <div className='handle-padding' key={index}><Entry values = {elem}/></div>)}
    </>
  )
}

export default HandleEntry