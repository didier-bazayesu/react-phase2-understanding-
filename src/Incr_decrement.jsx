import React from 'react';
import { useState } from 'react';

function Incr_decrement() {
    

    let [count, setCount] = useState(0);
    function  countNegative() {
             count =  count -1 ;
           setCount(count)
    }

    function countPositive(){
        
        setCount(count+1);
    }
    return (
        <div>


            <button onClick={()=>{countPositive()}}>+</button>
            <p>: {count}</p>
            <button onClick={countNegative}>-</button>

        </div>
    )
}

export default Incr_decrement