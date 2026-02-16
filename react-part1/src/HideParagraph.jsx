
import React, { useState } from 'react'

function HideParagraph() {
    let [isAnswer, isSetAnswer] = useState(true);

    function getAnswer() {
        isSetAnswer(prev => !prev);
    }
    return (
        <div className='handle-answer'>
            <p>What is biology</p>
           {isAnswer && <p>is a study of living things and their sarrounding</p>}
            <button onClick={getAnswer}>{isAnswer ? "Hide answer" : "Show answer"}</button>
        </div>
    )
}

export default HideParagraph