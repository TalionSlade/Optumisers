import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './Home.js'
import Question from './Question.js'
import Results from './Results.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid className="px-4 py-4">
        <Router>
          <Switch>
            <Route path="/question1">
              <Question 
                url={require("./res/nephew3.png")} 
                options={['Jayit (Nephew)', 'Shankar (Brother)', 'Ankan (Grandchild)', 'Arpan (Nephew)']} 
                correctAnswer="Jayit (Nephew)" 
                questionNumber={1}s
              />
            </Route>
            <Route path="/question2">
              <Question 
                url={require("./res/niece3.jpeg")} 
                options={['JJ (Grandchild)', 'Jyotika (Neice)', 'Sharanya (Neice)', 'SM (Niece)']} 
                correctAnswer="Sharanya (Neice)" 
                questionNumber={2}
              />
            </Route>
            <Route path="/question3">
              <Question 
                url={require("./res/sister2.jpg")} 
                options={['Ruma (Sister)', 'Jyotika (Cousin)', 'Sharanya (Sister)', 'JJ (Niece)']} 
                correctAnswer="Ruma (Sister)" 
                questionNumber={3}
              />
            </Route>
            <Route path="/question4">
              <Question 
                url={require("./res/niece4.png")} 
                options={['Sharanya (Sister)', 'JJ (Grandchild)', 'Jyotika (Neice)', 'Jayit (Neice)']} 
                correctAnswer="Jyotika (Neice)" 
                questionNumber={4}
              />
            </Route>
            <Route path="/question5">
              <Question 
                url={require("./res/nephew5.jpg")} 
                options={['Arpan (Nephew)', 'Ankan (Grandchild)', 'Jayit (Nephew)', 'Shankar (Brother)']} 
                correctAnswer="Arpan (Nephew)" 
                questionNumber={5}
              />
            </Route>
            <Route path="/question6">
              <Question 
                url={require("./res/grandchild3.jpeg")} 
                options={['Annanya (Niece)', 'JJ (Grandchild)', 'Ankan (Grandchild)', 'Jayit (Niece)']} 
                correctAnswer="JJ (Grandchild)" 
                questionNumber={6}
              />
            </Route>
            <Route path="/question7">
              <Question 
                url={require("./res/niece3.jpeg")} 
                options={['Arpan (Sister)', 'Jyotika (Neice)', 'Sharanya (Neice)', 'JJ (Neice)']} 
                correctAnswer="Sharanya (Neice)" 
                questionNumber={7}
              />
            </Route>
            <Route path="/question8">
              <Question 
                url={require("./res/brother2.jpg")} 
                options={['Shankar (Brother)', 'Simon (Nephew)', 'David (Cousin)', 'John (Nephew)']} 
                correctAnswer="Shankar (Brother)" 
                questionNumber={8}
              />
            </Route>
            <Route path="/question9">
              <Question 
                url={require("./res/grandchild5.jpg")} 
                options={['Ankan (Grandchild)', 'Arpan (Nephew)', 'Jayit (Nephew)', 'JJ (Grandchild)']} 
                correctAnswer="Ankan (Grandchild)" 
                questionNumber={9}
              />
            </Route>
            <Route path="/results">
              <Results/>
            </Route>
            <Route path="/">
              <Home/>
            </Route> 
          </Switch>
        </Router>      
      </Container>
    </div>
  );
}

export default App;
