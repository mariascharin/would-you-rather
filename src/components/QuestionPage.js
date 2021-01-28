import React, { Component } from 'react';
import Question from './Question';
import { connect } from 'react-redux'

class QuestionPage extends Component {
  render() {
      const { id } = this.props
      return (
          <Question id={id}/>
      )
  }
}

function mapStateToProps({}, props){
    const { id } = props.match.params
    return {
        id,
    }
}

export default connect(mapStateToProps)(QuestionPage)
