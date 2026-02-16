import { func } from 'prop-types'
import React from 'react'
import { useState } from 'react'

function EmploymentStatus() {
    let [status, setStatus] = useState('')
    let [favorite, setFavorite] = useState([]);
    let [select, setSelect] = useState('')

    function handleRadio(event) {
        const data = event.target.value
        setStatus(data);

    }

    function handleStatus(event) {
        let { checked, value } = event.target;
        if (checked) setFavorite(prev => ([
            ...prev,
            value
        ]))

        else setFavorite(prev => prev.filter(elem => elem !== value));
    }




    //handling select element 
    const handleSelect = (event) => {
        setSelect(() => event.target.value)
    }


    return (

        <>
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
                        checked={status == 'part-time'}
                    />
                    part-time
                </label>

                <label htmlFor="full-time">
                    <input type="radio"
                        name="status"
                        id="full-time"
                        value='full-time'
                        onChange={handleRadio}
                        checked={status == 'full-time'}
                    />
                    full-time
                </label>


            </fieldset>
            <br /><br /><br />

            <div>
                <ul>
                    {favorite.map((elem, index) => <li key={index}>{elem}</li>)}
                </ul>

            </div>
            <fieldset>
                <legend className='change-legend-color'>Select your favorites things</legend>
                <label htmlFor="Option1">
                    <input
                        type="checkbox"
                        name="option1"
                        id="option1"
                        value='cinema'
                        onChange={handleStatus}

                    />
                    cinema
                </label>

                <label htmlFor="Option2">
                    <input type="checkbox"
                        name="option2"
                        id="option2"
                        value='Series Movie'
                        onChange={handleStatus}


                    />
                    Series Movie
                </label>

                <label htmlFor="Option3">
                    <input type="checkbox"
                        name="option3"
                        id="option3"
                        value='Drama'
                        onChange={handleStatus}

                    />

                    Drama
                </label>

            </fieldset>


            {/* learning how to use select input  <br /> <br /> <br /> <br />*/}
            <h1>{select}</h1>
            <label htmlFor="favColor">What is your favorite color?</label>
            <select id="favColor" onChange={handleSelect}>
                <option>Red</option>
                <option>Orange</option>
                <option>Yellow</option>
                <option>Green</option>
                <option>Blue</option>
                <option>Indigo</option>
                <option>Violet</option>
            </select> 

        </>
    )
}

export default EmploymentStatus