import {FindMirrorTypes} from '../actions/find-mirror-action'

const INITIAL_STATE_MIRROR_STATUS = {
    mirrorFound: false
};

const INITIAL_STATE_ACCEPT_URL = {
    url: ''
};

export function mirrorStatusReducer(state = INITIAL_STATE_MIRROR_STATUS, action) {
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


export function urlReducer(state = INITIAL_STATE_ACCEPT_URL, action) {
    switch(action.type) {
        case FindMirrorTypes.ACCEPT_URL:
            return Object.assign({}, state, {
                url: action.url
            });
        default:
            return state;
    }

   /* if (state.type.localCompare( FindMirrorTypes.ACCEPT_URL)) {
        console.log("foo")
        return Object.assign({}, state, {
            url: action.url
        });
    }
    return state;*/
}
