import React from 'react'
import { img } from '../../public/image'

export default function HeaderJaurnel() {
  return (
    <header>
        <img src={img} alt="Travel" />
        <h1 className='handle-size'>My travel jaurnel</h1>
    </header>
  )
}
