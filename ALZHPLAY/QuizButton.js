import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function QuizButton({ url, text }) {
    return (
        <Col className="text-center">
            <Link to={url}>
                <button variant="primary" size="lg">{text}</button>{' '}
            </Link>
        </Col>
    )
}

export default QuizButton
