import { bodySelectorReducer, addUserViewReducer } from '../../reducer/body-selector-reducer'
import { BodySelectorTypes, ShowAddUserTypes } from '../../actions/body-selector-action'
import { FindMirrorTypes } from "../../actions/find-mirror-action";

describe('body-selector-reducer', () => {

    it('should return the initial state which is WIDGETS', () => {
        expect(bodySelectorReducer(undefined, {})).toEqual(
            {
                tab: 'WIDGETS'
            }
        )
    });

    it('should set tab to IMAGES', () => {
        expect(bodySelectorReducer(
            {
                tab: 'WIDGETS'
            }, {
            type: BodySelectorTypes.SELECTED_TAP_IMAGES       
        })).toEqual (
            {
                tab: 'IMAGES'
            }
        )
    });

    it('should set tab to WIDGETS', () => {
        expect(bodySelectorReducer(
            {
                tab: 'IMAGES'
            }, {
            type: BodySelectorTypes.SELECTED_TAP_WIDGETS
        })).toEqual (
            {
                tab: 'WIDGETS'
            }
        )
    });

    it('should set tab to WIDGETS when logging out', () => {
        expect(bodySelectorReducer(
            {
                tab: 'IMAGES'
            }, {
            type: FindMirrorTypes.LOGOUT
        })).toEqual (
            {
                tab: 'WIDGETS'
            }
        )
    });

    it('should set tab to WIDGETS when logging out', () => {
        expect(bodySelectorReducer(
            {
                tab: 'IMAGES'
            }, {
            type: FindMirrorTypes.LOGOUT
        })).toEqual (
            {
                tab: 'WIDGETS'
            }
        )
    });

    it('should set tab to WIDGETS when logging out', () => {
        expect(bodySelectorReducer(
            {
                tab: 'IMAGES'
            }, {
            type: FindMirrorTypes.LOGOUT
        })).toEqual (
            {
                tab: 'WIDGETS'
            }
        )
    });
});

describe('addUserViewReducer', () =>{
    it('should return default state', () => {
        expect(addUserViewReducer(undefined, {})).toEqual (
            {
                addUserView: 'DISCARD'
            }
        )
    });

    it('should set addUserView to VIEW', () => {
        expect(addUserViewReducer({addUserView: 'DISCARD'}, {
            type: ShowAddUserTypes.SHOW_ADD_USER
        })).toEqual (
            {
                addUserView: 'SHOW'
            }
        )
    });


    it('should set addUserView to DISCARD', () => {
        expect(addUserViewReducer({addUserView: 'SHOW'}, {
            type: ShowAddUserTypes.DISCARD_ADD_USER
        })).toEqual (
            {
                addUserView: 'DISCARD'
            }
        )
    });
});