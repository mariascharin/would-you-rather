import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.id]: question,
            }
        case ANSWER_QUESTION:
            const answer = action.answer;
            const replyingTo = {
                [answer.id]: {
                    ...state[answer.id],
                    [answer.answer]: {
                        text: state[answer.id][answer.answer].text,
                        votes: state[answer.id][answer.answer].votes.concat([answer.userId]),
                    },
                }
            }
            return {
                ...state,
                ...replyingTo,
            }
        default :
            return state
    }
}
