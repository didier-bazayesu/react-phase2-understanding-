import React, { createContext, useContext } from 'react'


export const UserDetails = createContext(null);
function HandlePrps({ }) {
    const data = useContext(UserDetails);
    return (
        <>
            <button onClick={data.onClick}>click here!</button>


        </>
    )
}

export default HandlePrps