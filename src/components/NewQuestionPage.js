import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NewQuestionPage extends Component {
  state = {
    toHome: false,
  }


  render() {
    const goToHome = (e) => (this.setState(() => ({
      toHome: true,
    })));
    const { toHome } = this.state
    if (toHome === true) {
      return (<Redirect to='/' />)
    }
    return (
      <div>
        <button className='btn' onClick={goToHome}>To Home</button>
        <div>
          NEW QUESTION PAGE
        </div>
      </div>
    )
  }
}

export default NewQuestionPage
