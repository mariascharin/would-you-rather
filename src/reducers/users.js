import { RECEIVE_USERS, ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER } from '../actions/users'

export default function users (state = {}, action) {
    let updatedUser;
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users,
            }
        case ADD_QUESTION_TO_USER :
            const { question } = action;
            const { author, id } = question;
            updatedUser = {
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([id])
                }
            };
            return {
                ...state,
                ...updatedUser,
                }
        case ADD_ANSWER_TO_USER :
            const { user, questionId, option } = action;
            updatedUser = {
                [user]: {
                    ...state[user],
                }
            }
            updatedUser[user].answers[questionId] = option;
            return {
                ...state,
                ...updatedUser,
            };
        default :
            return state
    }
}