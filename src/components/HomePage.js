import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from './Login';
import Question from "./Question";

class HomePage extends Component {
    render() {
        console.log('HomePage component props: ', this.props)
        return (
            <div>
                <Login />
                <h3 className='center'>Question List</h3>
                <ul className='dashboard-list'>
                    {this.props.questionIds.map((id) => (
                            <li key={id}>
                                <div>QUESTION ID: {id}</div>
                            </li>
                        )
                    )}
                </ul>
                <Question />
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) =>
            questions[b].timeStamp - questions[a].timeStamp)
    }
}

export default connect(mapStateToProps)(HomePage)
