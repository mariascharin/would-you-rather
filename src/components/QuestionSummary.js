import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, ProgressBar } from 'react-bootstrap';
import { NavLink, Redirect } from "react-router-dom";

class QuestionSummary extends Component {
  state = {
    toQuestion: '',
  }
  render() {
    const { authedUser, question, author } = this.props
    const questionAmended = {
      ...question,
      authorName: author.name,
      optionOne: {
        ...question.optionOne,
        noVotes: question.optionOne.votes.length,
        percentVoted: 100*question.optionOne.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length),
        voted: question.optionOne.votes.includes(authedUser)
      },
      optionTwo: {
        ...question.optionTwo,
        noVotes: question.optionTwo.votes.length,
        percentVoted: 100*question.optionTwo.votes.length/(question.optionOne.votes.length + question.optionTwo.votes.length),
        voted: question.optionTwo.votes.includes(authedUser),
      },
      totVotes: question.optionOne.votes.length + question.optionTwo.votes.length
    }

    const goToQuestion = () => (this.setState((questionId) => ({
      toQuestion: questionId,
    })));
    const { toQuestion } = this.state
    if (toQuestion) {
      return (<Redirect to={`/questions/${questionAmended.id}`} />)
    }

    // <h4 className='center'>Asked by {author.name}</h4>
    if (question === null) {
      return <p>This question doesn't exist.</p>
    }
    const { id, timestamp, optionOne, optionTwo } = question
    const imageURL = 'http://localhost:3000/images/'
    const authorAmended = {
      ...author
    }
      return (
      <div>
        <div className='tweet'>
          <img
              src={author.avatarURL}
              alt={`Avatar of ${author.name}`}
              className='avatar'
          />
          <div className='tweet-info'>
            <div>
              <span>{author.name} asks:</span>
              <div>Would you rather</div>
              <span>{questionAmended.optionOne.text}?</span>
              <div>or...</div>
              <button className='btn' onClick={goToQuestion}>To question</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
  const question=questions[id]
  return {
    authedUser,
    question: question ? question : null,
    author: question ? users[question.author] : null,
  }
}

export default connect(mapStateToProps)(QuestionSummary)
