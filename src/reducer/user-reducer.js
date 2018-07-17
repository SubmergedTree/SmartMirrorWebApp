import { USERTYPES } from "../actions/user-actions";
import { FindMirrorTypes } from "../actions/find-mirror-action";

const INITIAL_STATE_USERS = {
    users: []
}

export function usersReducer(state = INITIAL_STATE_USERS, action) {
    switch(action.type) {
        case USERTYPES.GETUSERS_ERROR:
            return Object.assign({}, state, {
                users: []
            });
        case USERTYPES.GETUSERS_SUCCESS:
            return Object.assign({}, state, {
                users: action.users
            });
        case FindMirrorTypes.LOGOUT:
            return Object.assign({}, state, {
                users: []
            });
        default:
            return state;
    }
}