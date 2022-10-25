import React, { useState, useEffect, useRef } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Option from './Option.js'
import QuizButton from './QuizButton.js'
import { useStateValue } from './StateProvider.js'
import "./Question.css"

function Question({ url, options, correctAnswer, questionNumber }) {

    const [state, dispatch] = useStateValue();
    const [clicked, setClicked] = useState(false);
    const buttonRef = useRef(null);
    let nextQuestion = questionNumber + 1;

    useEffect(() => {
        if (clicked) {
            buttonRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [clicked])

    useEffect(() => {
        console.log('Question Number: ' + questionNumber);
        console.log('Score: ' + state.score);
        console.log('isClicked: ' + clicked);
        setClicked(false);
    }, [questionNumber])

    const updateScore = (answer) => {
        setClicked(true);
        if (answer == correctAnswer) {
            dispatch({
                type: 'UPDATE_SCORE'
            });
        }
    }

    return (
        <div>
            <Row className="justify-content-center">
                <h1>Question {questionNumber} of 9</h1>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 4 }}  className="pt-3 pl-5">
                    <img src={url} className="question_image"/>
                    </Col>
            </Row>
            <Row className="pt-4">
                <Col className="text-center"><h3>What is the name and relationship of this relative?</h3></Col>
            </Row>
            <Row className="pt-1 px-5 text-center">               
                    {options.map(option => (
                        <Col md={6} className="px-2 pt-3">
                            <div onClick={!clicked ? e => updateScore(option) : null}>
                                <Option 
                                    optionText={option} 
                                    correctAnswer={correctAnswer} 
                                    answerSubmitted={clicked} 
                                    isCorrect={option == correctAnswer ? true : false}
                                />
                            </div>
                        </Col>
                    ))}
            </Row>  
            <div ref={buttonRef}>
                {clicked &&
                    
                        <Row className="pt-4">
                                <QuizButton 
                                    url={questionNumber != 9 ? "/question" + nextQuestion : "results"} 
                                    text={questionNumber != 9 ? "Next Question" : "View Results"}
                                />
                        </Row>
                }
            </div>
        </div>
    )
}

export default Question
