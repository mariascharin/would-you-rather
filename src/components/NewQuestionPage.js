import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { formatQuestion } from '../utils/helpers';

class NewQuestionPage extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  render() {
    const textMaxLength = 30;
    const goToHome = (e) => (this.setState(() => ({
      toHome: true,
    })));
    const { optionOneText, optionTwoText, toHome } = this.state;
    const { dispatch, authedUser } = this.props

    if (toHome === true) {
      return <Redirect to='/' />
    }

    const textLeft = {
      optionOne: textMaxLength - optionOneText.length,
      optionTwo: textMaxLength - optionTwoText.length,
    }
    const handleOptionOneInput = (e) => {
      const optionOneText = e.target.value

      this.setState(() => ({
        optionOneText
      }))
    }
    const handleOptionTwoInput = (e) => {
      const optionTwoText = e.target.value

      this.setState(() => ({
        optionTwoText
      }))
    }
    const handleSubmit = (e) => {
      e.preventDefault()

      const question = {
        optionOneText: formatQuestion(optionOneText),
        optionTwoText: formatQuestion(optionTwoText),
        authedUser }

      dispatch(handleAddQuestion(question));
      goToHome();
    }

    return (
          <div>
            <h3 className='center'>Create New Question</h3>
            <div className='new-question'>
            <div>Complete the question:</div>
            <div>Would you rather...</div>
            <form className='new-question' onSubmit={handleSubmit}>
              <input
                  type='text'
                  placeholder="Option One"
                  value={optionOneText}
                  onChange={handleOptionOneInput}
                  maxLength={textMaxLength}
              />
              {textLeft.optionOne <= 10 && (
                  <div className='question-length'>
                    {textLeft.optionOne}
                  </div>
              )}
              <div>
                OR
              </div>
              <input
                  type='text'
                  placeholder="Option Two"
                  value={optionTwoText}
                  onChange={handleOptionTwoInput}
                  maxLength={textMaxLength}
              />
              {textLeft.optionTwo <= 10 && (
                  <div className='question-length'>
                    {textLeft.optionTwo}
                  </div>
              )}
              <button
                  className='btn'
                  type='submit'
                  disabled={optionOneText === '' || optionTwoText === ''}>
                Submit
              </button>
            </form>
            </div>
          </div>
    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(NewQuestionPage)
