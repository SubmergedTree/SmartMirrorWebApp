import { usersReducer, selectUserReducer } from '../../reducer/user-reducer'
import { FindMirrorTypes } from '../../actions/find-mirror-action'
import { USERTYPES } from "../../actions/user-actions";

describe('usersReducer', () => {

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


describe('selectUserReducer', () => {

    it('should return the initial state', () => {
        expect(selectUserReducer(undefined, {})).toEqual(
            {
                selectedUser: null
            }
        )
    });

    it('should return current state', () => {
        expect(selectUserReducer(
            {
                selectedUser: "foo"
            }, {
                type: USERTYPES.GETUSERS_SUCCESS
            })).toEqual(
            {
                selectedUser: "foo"
            }
        )
    });

    it('should set return state with filled selectedUser', () => {
        expect(selectUserReducer(
            {
            selectedUser: 'bar'
        }, {
            type: USERTYPES.SELECT_USER,
            selectedUser: 'foo'
        })).toEqual(
            {
                selectedUser: 'foo'
            }
        )
    });

});