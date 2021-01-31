import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserDetails from './UserDetails';
import QuestionSummary from "./QuestionSummary";
import {Tab} from "react-bootstrap";

class LeaderBoardPage extends Component {
  render() {
    return (
        <div>
            <h3 className='center'>Leader Board</h3>
            <ul className='dashboard-list'>
                {this.props.usersIds
                    .map((id) => (
                            <li key={id}>
                                <UserDetails id={id} />
                            </li>
                        )
                    )}
            </ul>
        </div>
    )
  }
}

function mapStateToProps({users, questions}) {
    return {
        usersIds: Object.keys(users),
        users,
        questions,
    }
}

export default connect(mapStateToProps)(LeaderBoardPage)
