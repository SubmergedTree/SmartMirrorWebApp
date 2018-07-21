import {mirrorStatusReducer, urlReducer} from '../../reducer/find-mirror-reducer'
import {FindMirrorTypes} from '../../actions/find-mirror-action'

describe('find-mirror-reducer', () => {

    it('should return the initial state ', () => {
        expect(mirrorStatusReducer(undefined, {})).toEqual(
            {
                mirrorFound: false
            }
        )
    });

    it('should handle connection failure', () => {
        expect(mirrorStatusReducer([], {
            type: FindMirrorTypes.STATUS_ERROR,
            exception: 'No Server Found'
        })).toEqual (
            {
                mirrorFound: false
            }
        )
    });

    it('should handle connection success', () => {
        expect(mirrorStatusReducer([], {
            type: FindMirrorTypes.STATUS_SUCCESS,
            status: 'up'
        })).toEqual (
            {
                mirrorFound: true
            }
        )
    });


    it('should handle logout', () => {
        expect(mirrorStatusReducer([], {
            type: FindMirrorTypes.LOGOUT,
            status: 'up'
        })).toEqual (
            {
                mirrorFound: false
            }
        )

    });


    it('should return empty url as default value', () => {
        expect(urlReducer(undefined, {})).toEqual(
            {
                url: ''
            }
        )
    });


    it('should returns set url', () => {
        expect(urlReducer({}, {
            type: FindMirrorTypes.ACCEPT_URL,
            url: 'www.url.com'
        })).toEqual(
            {
                url: 'www.url.com'
            }
        )
    });

    it('should return empty url and set mirrorFound to false', () => {
        expect(urlReducer({}, {
            type: FindMirrorTypes.LOGOUT
        })).toEqual(
            {
                url: '',
            }
        )
    });

});
