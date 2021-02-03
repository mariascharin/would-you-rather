import React, { Component } from 'react';
import {connect} from "react-redux";
import {Badge, ProgressBar} from "react-bootstrap";

class UserDetails extends Component {
  render() {
    const {
      name,
      avatarURL,
      questionsAsked,
      questionsAnswered,
      totalScore,
    } =  this.props.user;

    return (
        <div>
          <div className='tweet'>
            <img
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className='avatar'
            />
            <div className='tweet-info'>
              <div>
                <span>{name}</span>
                <div className='question-detail'>
                  <span>Answered questions: <b>{questionsAnswered}</b></span>
                </div>
                <div className='question-detail'>
                  <span>Asked questions: <b>{questionsAsked}</b></span>
                </div>
              </div>
            </div>
            <div className='question-detail'>
              <span>Score: <b>{totalScore}</b></span>
            </div>
          </div>
        </div>
    )
  }
}

export default UserDetails
