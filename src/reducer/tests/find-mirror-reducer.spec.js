import findMirrorStatusReducer from '../find-mirror-reducer'
import {FindMirrorTypes} from '../../actions/find-mirror-action'

describe('find-mirror-reducer', () => {

    it('should return the initial state ', () => {
        expect(findMirrorStatusReducer(undefined, {})).toEqual(
            {
                mirrorFound: false
            }
        )
    });

    it('should handle connection failure', () => {
        expect(findMirrorStatusReducer([], {
            type: FindMirrorTypes.STATUS_ERROR,
            exception: 'No Server Found'
        })).toEqual (
            {
                mirrorFound: false
            }
        )
    });

    it('should handle connection success', () => {
        expect(findMirrorStatusReducer([], {
            type: FindMirrorTypes.STATUS_SUCCESS,
            status: 'up'
        })).toEqual (
            {
                mirrorFound: true
            }
        )
    });
});
