import {BodySelectorTypes, selectImagesTab, selectWidgetsTab,
     showAddUser, discardAddUser, ShowAddUserTypes} from "../../actions/body-selector-action";
import expect from 'expect'

describe('selectImagesTab', () => {
    it('should return IMAGES as tab', () => {
        expect(selectImagesTab()).toEqual({
            type: BodySelectorTypes.SELECTED_TAP_IMAGES,
          })
    });
});

describe('selectWidgetsTab', () => {
    it('should return WIDGETS as tab', () => {
        expect(selectWidgetsTab()).toEqual({
            type: BodySelectorTypes.SELECTED_TAP_WIDGETS,
          })
    });
});

describe('showAddUser', () => {
    it('should return SHOW_ADD_USER', () => {
        expect((showAddUser())).toEqual({
            type: ShowAddUserTypes.SHOW_ADD_USER,
          })
    });
});

describe('discardAddUser', () => {
    it('should return DISCARD_ADD_USER', () => {
        expect(discardAddUser()).toEqual({
            type: ShowAddUserTypes.DISCARD_ADD_USER,
          })
    });
});