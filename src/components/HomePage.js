import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from './Login';
import Question from "./Question";
import QuestionSummary from "./QuestionSummary";
import { Tabs, Tab } from 'react-bootstrap'


class HomePage extends Component {
    state =  {
        tab: "unanswered",
    };
    switchTabs = (tab) => {
        const newTab = tab;
        this.setState(()=> ({
            tab: newTab,
        }))
    }
    render() {
        return (
            <div>
                <Login />
                <div>
                    <Tabs
                        id="controlled-tab"
                        activeKey={this.state.tab}
                        onSelect={(tab) => this.switchTabs(tab)}
                    >
                        <Tab eventKey="unanswered" title="Unanswered">
                            <div>
                                <h3 className='center'>Question List</h3>
                                <ul className='dashboard-list'>
                                    {this.props.questionIds
                                        .filter((id) => (!this.props.unansweredQuestions.includes(id)))
                                        .map((id) => (
                                            <li key={id}>
                                                <QuestionSummary id={id}/>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </Tab>
                        <Tab eventKey="answered" title="Answered">
                            <div>
                                <h3 className='center'>Question List</h3>
                                <ul className='dashboard-list'>
                                    {this.props.questionIds
                                        .filter((id) => (this.props.unansweredQuestions.includes(id)))
                                        .map((id) => (
                                            <li key={id}>
                                                <QuestionSummary id={id}/>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) =>
            questions[b].timeStamp - questions[a].timeStamp),
        unansweredQuestions: Object.values(questions)
            .filter((question) => (
                question.optionOne.votes.includes(authedUser) ||
                question.optionTwo.votes.includes(authedUser)
            ))
            .map((question) => (question.id))
    }
}

export default connect(mapStateToProps)(HomePage)
