import React, { Component } from 'react';
import Login from './Login';
import QuestionList from './QuestionList';

class HomePage extends Component {
  render() {
    return (
      <div>
          <Login />
          <QuestionList />
          HOME PAGE
      </div>
    )
  }
}

export default HomePage
