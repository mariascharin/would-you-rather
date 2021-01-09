import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import NewQuestionPage from './NewQuestionPage';
import LeaderBoardPage from './LeaderBoardPage';

class App extends Component {
  render() {
    return (
        <Router>
          <div className='contains'>
              <Nav />
              <div>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/questions/:id' component={QuestionPage} />
                  <Route path='/add' component={NewQuestionPage} />
                  <Route path='/leaderboard' component={LeaderBoardPage} />
              </div>
          </div>
        </Router>
    )
  }
}

export default App
