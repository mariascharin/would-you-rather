import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoadingBar } from 'react-redux-loading';
import Nav from './Nav';
import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import NewQuestionPage from './NewQuestionPage';
import LeaderBoardPage from './LeaderBoardPage';
import Login from './Login';
import NotFound from "./NotFound";
import { handleInitialData } from '../actions/shared'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const {authedUser} = this.props;
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    {authedUser === '' || authedUser === null
                        ?
                        <Route component={Login}/>
                        :
                        <div className='container'>
                            <Nav authedUser={authedUser}/>
                            <div>
                                <Route path='/' exact component={HomePage}/>
                                <Route path='/questions/:id' component={QuestionPage}/>
                                <Route path='/add' component={NewQuestionPage}/>
                                <Route path='/leaderboard' component={LeaderBoardPage}/>
                                <Route path='/notfound' component={NotFound}/>
                            </div>
                        </div>
                    }
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps ({ authedUser }) {

    return {
        authedUser,
        loading: authedUser === '',
    }
}

export default connect(mapStateToProps)(App)
