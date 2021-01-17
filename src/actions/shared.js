import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialQuestions () {
    return (dispatch) => {
        return _getQuestions()
            .then(({ questions }) => {
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleInitialUsers () {
    return (dispatch) => {
        return _getUsers()
            .then(({ users }) => {
                dispatch(receiveUsers(users))
            })
    }
}


export function handleInitialData () {
    return (dispatch) => {
        Promise.all([
            _getQuestions(),
            _getUsers(),
        ]).then(([ questions, users  ]) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            console.log('questions: ', questions);
            console.log('users: ', users);
        })
    }
}

export function handleAuthedUser (AUTHED_ID) {
    return (dispatch) => {
        dispatch(setAuthedUser(AUTHED_ID))
    }
}
