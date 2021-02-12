import React, { Component } from 'react';
import Question from './Question';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class QuestionPage extends Component {
  render() {
      const { id, badId } = this.props
      if (badId === true) {
          return <Redirect to="/notfound" />;
      }
      return (
          <Question id={id}/>
      )
  }
}

function mapStateToProps({questions}, props){
    const { id } = props.match.params
    const badId = id === undefined || !Object.keys(questions).includes(id)
    return {
        id,
        badId
    }
}

export default connect(mapStateToProps)(QuestionPage)
