import {BodySelectorTypes, selectImagesTab, selectWidgetsTab} from "../../actions/body-selector-action";
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