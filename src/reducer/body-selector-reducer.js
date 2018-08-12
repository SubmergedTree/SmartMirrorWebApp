import {BodySelectorTypes} from "../actions/body-selector-action";
import { FindMirrorTypes } from "../actions/find-mirror-action";

const Tabs = {
    WIDGETS: 'WIDGETS',
    IMAGES: 'IMAGES'
}

const INITIAL_BODY_SELECTOR_STATE = {
    tab: Tabs.WIDGETS
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
