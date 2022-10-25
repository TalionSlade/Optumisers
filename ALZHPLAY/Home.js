import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './Header.js'
import StudyImage from './StudyImage.js'
import QuizButton from './QuizButton.js'
import { useStateValue } from './StateProvider.js'

function Home() {

    const [{ score }, dispatch] = useStateValue();

    //Reset score when on home page
    const resetScore = () => {
        dispatch({
            type: 'RESET_SCORE'
        })
    };

    return (
        <div>
            <Row className="justify-content-center">
                <Header/>
            </Row>
            <Row className="py-4">
                <Col md={12} className="text-center"><div onClick={resetScore}><QuizButton url="/question1" text="REMEMBER THEM ALWAYS"/></div></Col>
            </Row>
            <Row className="px-3 pt-5">
                <StudyImage url={require("./res/brother2.jpg")} name="Shankar" relation="Brother"/>
                <StudyImage url={require("./res/sister2.jpg")} name="Ruma" relation="Sister"/>
                <StudyImage url={require("./res/nephew4.png")} name="Arpan" relation="Nephew"/>
            </Row>
            <Row className="px-3">
                <StudyImage url={require("./res/niece3.jpeg")} name="Sharanya" relation="Niece"/>
                <StudyImage url={require("./res/nephew3.png")} name="Jayit" relation="Nephew"/>
                <StudyImage url={require("./res/niece4.png")} name="Jyotika" relation="Niece"/>
            </Row>
            <Row className="px-3">
                <StudyImage url={require("./res/grandchild3.jpeg")} name="JJ" relation="Grandchild"/>
                <StudyImage url={require("./res/grandchild6.jpeg")} name="Joe" relation="Grandchild"/>
                <StudyImage url={require("./res/grandchild5.jpg")} name="Ankan" relation="Grandchild"/>
            </Row>
        </div>
    )
}

export default Home
