import { USERTYPES } from "../actions/user-actions";
import { FindMirrorTypes } from "../actions/find-mirror-action";

const INITIAL_STATE_USERS = {
    users: []
}

const INITIAL_STATE_SELECTED_USER = {
    selectedUser: null
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

export function selectUserReducer(state = INITIAL_STATE_SELECTED_USER, action) {
    switch(action.type) {
        case USERTYPES.SELECT_USER:
            return Object.assign({}, state, {
                selectedUser: action.selectedUser
            });
        case FindMirrorTypes.LOGOUT:
            return Object.assign({}, state, {
                selectedUser: null
            });
        default:
            return state;
    }
}