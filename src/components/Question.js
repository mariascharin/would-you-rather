import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, ProgressBar } from 'react-bootstrap';
import { handleAnswerQuestion } from '../actions/questions';

class Question extends Component {
  state = {
    voted: false,
  }

  setVoted = () => (this.setState(() => ({
    voted: true,
  })));

  render() {
    const { authedUser, question, author } = this.props
    let answered = false;

    if (question === null) {
      return <p>This question doesn't exist.</p>
    } else {
      answered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);
    }

    const handleVote = (option) => {
      const { dispatch, questionId } = this.props;
      dispatch(handleAnswerQuestion(questionId, option));
      this.setVoted();
    }

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
              <span>Asked by {author.name}</span>

            <div>Results</div>
              <div className='question-detail'>
              <span>Would you rather {questionAmended.optionOne.text}?</span>
              <div>
                <ProgressBar now={questionAmended.optionOne.percentVoted} label={`${questionAmended.optionOne.percentVoted}%`} />
                {questionAmended.optionOne.noVotes} of {questionAmended.totVotes}
                {questionAmended.optionOne.voted && <span><span>    </span><Badge variant="danger">You voted this!</Badge></span>}
              </div>
                {!answered && !this.state.voted &&
                <button
                    className='btn'
                    onClick={() => (handleVote('optionOne'))}
                >
                  Vote
                </button>}
              </div>

              <div className='question-detail'>

              <span>Would you rather {questionAmended.optionTwo.text}?</span>
              <div>
                <ProgressBar now={questionAmended.optionTwo.percentVoted} label={`${questionAmended.optionTwo.percentVoted}%`} />
                {questionAmended.optionTwo.noVotes} of {questionAmended.totVotes}
                {questionAmended.optionTwo.voted && <span><span>    </span><Badge variant="danger">You voted this!</Badge></span>}
              </div>
                {!answered && !this.state.voted &&
                <button
                    className='btn'
                    onClick={()=>(handleVote('optionTwo'))}
                >
                  Vote
                </button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, props) {
  const { id }=props;
  const question=questions[id];
  return {
    questionId: id,
    authedUser,
    question: question ? question : null,
    author: question ? users[question.author] : null,
  }
}

export default connect(mapStateToProps)(Question)
