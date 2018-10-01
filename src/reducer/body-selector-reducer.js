import {BodySelectorTypes, ShowAddUserTypes} from "../actions/body-selector-action";
import { FindMirrorTypes } from "../actions/find-mirror-action";

const Tabs = {
    WIDGETS: 'WIDGETS',
    IMAGES: 'IMAGES'
}

const AddUserView  = {
    DISCARD: 'DISCARD',
    SHOW: 'SHOW'
}

const INITIAL_BODY_SELECTOR_STATE = {
    tab: Tabs.WIDGETS,
}

const INITIAL_ADD_USER_VIEW_STATE = {
    addUserView: AddUserView.DISCARD
}


export function bodySelectorReducer(state = INITIAL_BODY_SELECTOR_STATE, action) {
    switch(action.type) {
        case BodySelectorTypes.SELECTED_TAP_IMAGES:
            return Object.assign({}, state, {
                tab: Tabs.IMAGES
            });
        case BodySelectorTypes.SELECTED_TAP_WIDGETS:
            return Object.assign({}, state, {
                tab: Tabs.WIDGETS
            });
        case FindMirrorTypes.LOGOUT:
            return Object.assign({}, state, {
                tab: Tabs.WIDGETS
            });
        default:
            return state;
    }
}

export function addUserViewReducer(state = INITIAL_ADD_USER_VIEW_STATE, action) {
    switch(action.type) {
        case ShowAddUserTypes.SHOW_ADD_USER:
            return {
                ...state,
                addUserView: AddUserView.SHOW
            }
        case ShowAddUserTypes.DISCARD_ADD_USER: 
            return {
                ...state,
                addUserView: AddUserView.DISCARD
            }  
        default: 
            return state      
    }
}