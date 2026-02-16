import React from 'react'
import { useState } from 'react'

function EmploymentStatus() {
    let[status,setStatus ]= useState('')

    function handleRadio(event){
        const data = event.target.value
        setStatus(data);
        
    }

  return (

    <fieldset>  

        <h1>{status}</h1>
        <label htmlFor="unemployed">
            <input type="radio"

             id='unemployed'
              value='unEmployed'
              name='unEmployed'
               onChange={handleRadio}
                checked={status == 'unEmployed'}
            />
            un Employed
        </label>

        <label htmlFor="part-time">
            <input type="radio"
             name="status" 
             id="part-time" 
             value='part-time'
             onChange={handleRadio}
             checked ={status == 'part-time'}
            />
            part-time
        </label>

          <label htmlFor="full-time">
              <input type="radio"
                name="status" 
                id="full-time" 
                value='full-time'
                onChange={handleRadio}
                checked = {status == 'full-time'}
               />
              full-time
          </label>
   
    </fieldset>
  )
}

export default EmploymentStatus