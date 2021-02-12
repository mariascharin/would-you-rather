import React, { Component } from 'react';
import { connect } from 'react-redux'
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
                <div>
                    <Tabs
                        id="controlled-tab"
                        activeKey={this.state.tab}
                        onSelect={(tab) => this.switchTabs(tab)}
                    >
                        <Tab eventKey="unanswered" title="Unanswered" >
                            <div>
                                <h3 className='center'>Question List</h3>
                                <ul>
                                    {this.props.sortedUnansweredQuestionIds
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
                                <ul>
                                    {this.props.sortedAnsweredQuestionIds
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

function mapStateToProps({ users, questions, authedUser }) {
    const answeredQuestionIds = Object.keys(users[authedUser].answers);
    const sortedAnsweredQuestionIds = Object.values(questions)
        .filter(question => answeredQuestionIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((question) => (question.id));
    const sortedUnansweredQuestionIds = Object.values(questions)
        .filter(question => !answeredQuestionIds.includes(question.id))
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((question) => (question.id));

    return {
        sortedAnsweredQuestionIds,
        sortedUnansweredQuestionIds,
    }
}

export default connect(mapStateToProps)(HomePage)
