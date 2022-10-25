import React, { useState, useEffect } from 'react'
import "./Option.css"

function Option({ optionText, correctAnswer, answerSubmitted, isCorrect }) {

    const [optionClass, setClass] = useState('option');

    useEffect(() => {
        if (answerSubmitted) {
            //Reveal answer and disable other options
            if (isCorrect) {
                setClass('correct disabled');
            } else {
                let newClass = optionClass + ' disabled';
                setClass(newClass);
            }
        } else {
            setClass('option');
        }
    }, [answerSubmitted])

    const checkAnswer = () => {
        if (optionText == correctAnswer) {
            setClass('correct');
        } else {
            setClass('incorrect');
        }
        
    };

    return (
        <div className={optionClass} onClick={!answerSubmitted ? e => checkAnswer() : null}>
            <p className="option_text">{optionText}</p>
        </div>
    )
}

export default Option
