import { SET_AUTHED_USER, UNSET_AUTHED_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {
    const { userId } = action;
    switch (action.type) {
        case SET_AUTHED_USER :
            return userId
        case UNSET_AUTHED_USER :
            return ''
        default :
            return state
    }
}
