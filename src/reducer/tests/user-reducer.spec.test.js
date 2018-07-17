import { usersReducer } from '../user-reducer'
import { FindMirrorTypes } from '../../actions/find-mirror-action'
import { USERTYPES } from "../../actions/user-actions";

describe('find-mirror-reducer', () => {

    it('should return the initial state ', () => {
        expect(usersReducer(undefined, {})).toEqual(
            {
                users: []
            }
        )
    });

    it('should handle connection failure', () => {
        expect(usersReducer([], {
            type: USERTYPES.GETUSERS_ERROR,
            exception: 'No Server Found'
        })).toEqual (
            {
                users: []
            }
        )
    });

    it('should handle successfull request', () => {
        expect(usersReducer([], {
            type: USERTYPES.GETUSERS_SUCCESS,
            users: ["bla", "blub"]
        })).toEqual (
            {
                users: ["bla", "blub"]
            }
        )
    });


    it('should handle logout', () => {
        expect(usersReducer([], {
            type: FindMirrorTypes.LOGOUT,
        })).toEqual (
            {
                users: []
            }
        )

    });
});
