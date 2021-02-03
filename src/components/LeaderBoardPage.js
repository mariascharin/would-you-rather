import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserDetails from './UserDetails';

class LeaderBoardPage extends Component {
  render() {
      const { users } = this.props;
      const totUsers = Object.values(users).map((user) => {
          const questionsAsked = user.questions.length ? user.questions.length : 0;
          const questionsAnswered = Object.values(user.answers).length ? Object.values(user.answers).length : 0;
          const totalScore = questionsAsked + questionsAnswered;
          return {
              id: user.id,
              name: user.name,
              avatarURL: user.avatarURL,
              questionsAsked,
              questionsAnswered,
              totalScore,
          }
          });
      const sortedUserList = totUsers.sort((a, b) =>
          b.totalScore - a.totalScore)

    return (
        <div>
            <h3 className='center'>Leader Board</h3>
            <ul className='dashboard-list'>
                {sortedUserList
                    .map((user) => (
                            <li key={user.id}>
                                <UserDetails user={user} />
                            </li>
                        )
                    )}
            </ul>
        </div>
    )
  }
}

function mapStateToProps({ users }) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(LeaderBoardPage)
