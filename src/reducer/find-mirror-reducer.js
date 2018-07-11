import {FindMirrorTypes} from '../actions/find-mirror-action'

const INITIAL_STATE = {
    mirrorFound: false
};

function findMirrorStatusReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FindMirrorTypes.STATUS_ERROR:
            return Object.assign({}, state, {
                mirrorFound: false
            });
        case FindMirrorTypes.STATUS_SUCCESS:
            return Object.assign({}, state, {
                mirrorFound: true
            });
        default:
        return state;
    }
}

export default findMirrorStatusReducer;