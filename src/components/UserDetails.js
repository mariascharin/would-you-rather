import React, { Component } from 'react';
import {connect} from "react-redux";
import {Badge, ProgressBar} from "react-bootstrap";

class UserDetails extends Component {
  render() {
    const { userId, users, questions } = this.props;
    const user = users[userId];
    const questionsAsked = Object.values(questions)
        .filter((question)=>(question.author === userId))
        .length;
    const questionsAnswered = Object.values(questions)
        .filter((question)=>(
            question.optionOne.votes.includes(userId) ||
            question.optionTwo.votes.includes(userId)
        ))
        .length;
    const totalScore = questionsAsked + questionsAnswered;
    const userStats = {
      userId,
      questionsAsked,
      questionsAnswered,
      totalScore,
    }

    return (
        <div>
          <div className='tweet'>
            <img
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className='avatar'
            />
            <div className='tweet-info'>
              <div>
                <span>{user.name}</span>
                <div className='question-detail'>
                  <span>Answered questions: <b>{userStats.questionsAnswered}</b></span>
                </div>
                <div className='question-detail'>
                  <span>Asked questions: <b>{userStats.questionsAsked}</b></span>
                </div>
              </div>
            </div>
            <div className='question-detail'>
              <span>Score: <b>{userStats.totalScore}</b></span>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps({users, questions}, props) {
  const { id }=props;
  return {
    userId: id,
    users,
    questions,
  }
}

export default connect(mapStateToProps)(UserDetails)
