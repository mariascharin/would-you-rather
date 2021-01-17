import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        Promise.all([
            _getQuestions(),
            _getUsers(),
        ]).then(([ questions, users  ]) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(AUTHED_ID));
        })
    }
}

export function handleAuthedUser (AUTHED_ID) {
    return (dispatch) => {
        dispatch(setAuthedUser(AUTHED_ID))
    }
}
