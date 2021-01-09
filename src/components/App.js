import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import HomePage from './HomePage'
import QuestionPage from './NewQuestionPage'
import NewQuestionPage from './NewQuestionPage'
import LeaderBoardPage from './LeaderBoardPage'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Nav />
              <HomePage />
              <QuestionPage />
              <NewQuestionPage />
              <LeaderBoardPage />
              APP
          </div>
        </Router>
    )
  }
}

export default App
