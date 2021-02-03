import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users,
            }
        case ADD_QUESTION_TO_USER :
            const { question } = action;
            const { author, id } = question;
            const updatedUser = {
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([id])
                }
            };
            return {
                ...state,
                ...updatedUser,
                }
        default :
            return state
    }
}