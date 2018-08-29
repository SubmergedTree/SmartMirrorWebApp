import {UPDATE_ACTION_TYPES} from '../actions/update-actions'
import { FindMirrorTypes } from "../actions/find-mirror-action";


const INITIAL_STATE_UPDATE = {
    sending: []
};

export function updateImagesReducer(state = INITIAL_STATE_UPDATE, action) {
    switch(action.type) {
        case UPDATE_ACTION_TYPES.FAILED_IMAGES_TRANSFER:
            return {
                ...state
            }
        case UPDATE_ACTION_TYPES.IMAGES_TRANSFERRED:
            return {
                ...state,
                sending: state.sending.filter(username => username !== action.username)
            };
        case UPDATE_ACTION_TYPES.START_SENDING:
            const newStateSending = {...state};
            newStateSending.sending.push(action.username);
            return newStateSending;
        case FindMirrorTypes.LOGOUT:
            return {
                ...state,
                sending: []
            };    
        default:
            return state;
    }
}
