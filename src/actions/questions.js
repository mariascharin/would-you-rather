import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion (question) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return _saveQuestion({
            author: authedUser,
            optionOneText: question.optionOneText,
            optionTwoText: question.optionTwoText
        })
            .then((question) => dispatch(addQuestion(question)))
    }
}

function answerQuestion (user, questionId, option) {
    return {
        type: ANSWER_QUESTION,
        answer: {
            id: questionId,
            answer: option,
            userId: user,
            }
        }
}

export function handleAnswerQuestion (questionId, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return _saveQuestionAnswer({
            authedUser,
            qid: questionId,
            answer: option
        })
            .then((question) => dispatch(answerQuestion(authedUser, questionId, option)))
    }
}