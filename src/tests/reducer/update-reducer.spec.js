import {updateImagesReducer} from '../../reducer/update-reducer'
import {UPDATE_ACTION_TYPES} from '../../actions/update-actions'
import { FindMirrorTypes } from "../../actions/find-mirror-action";


describe('updateImagesReducer', () => {

    it('should add username to sending array', () => {
        expect(updateImagesReducer({sending: []}, {       
            type: UPDATE_ACTION_TYPES.START_SENDING,
            username: 'Homer'
        })).toEqual(
            {
                sending: ['Homer']
            }
        )
    });

    it('should remove username from sending array', () => {
        expect(updateImagesReducer({sending: ['Homer', 'Bart', 'Comic Book Guy']}, {       
            type: UPDATE_ACTION_TYPES.IMAGES_TRANSFERRED,
            username: 'Homer'
        })).toEqual(
            {
                sending: ['Bart', 'Comic Book Guy']
            }
        )
    });

    it('should empty sending array on logout', () => {
        expect(updateImagesReducer({sending: ['Homer', 'Bart', 'Comic Book Guy']}, {       
            type: FindMirrorTypes.LOGOUT,
        })).toEqual(
            {
                sending: []
            }
        )
    });
});