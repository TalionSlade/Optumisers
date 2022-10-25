import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useStateValue } from './StateProvider.js'
import QuizButton from './QuizButton.js';

function Results() {
    const [{ score }, dispatch] = useStateValue();



    return (
        <div>
            <Row>
                <Col md={12} className="mt-5 pt-2 text-center"><h1>Quiz Results</h1></Col>
            </Row>
            <Row className="mt-5 pt-5">
                <Col md={12} className="mt-5 pt-5 text-center"><h2>Thank you for taking a trip down memory lane!</h2></Col>
                <Col md={12} className="pt-3 text-center"><h2>Your final score is...</h2></Col>
            </Row>
            <Row>
                <Col md={12} className="mt-3 pt-5 text-center"><h1 style={{ fontSize: "65px" }}>{score}/9</h1></Col>
            </Row>
            <Row>
                <Col md={12} className="mt-5 pt-5 text-center"><QuizButton url="/" text="Return to Home Page"/></Col>
            </Row>
            
        </div>
    )
}

export default Results
