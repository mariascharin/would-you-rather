import { showLoading, hideLoading } from 'react-redux-loading';
import { _getUsers, _getQuestions } from '../utils/_DATA';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        Promise.all([
            _getQuestions(),
            _getUsers(),
        ]).then(([ questions, users  ]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID));
            dispatch(hideLoading());
        })
    }
}

export function handleAuthedUser (AUTHED_ID) {
    return (dispatch) => {
        dispatch(setAuthedUser(AUTHED_ID))
    }
}
