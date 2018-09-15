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

    /*it('should handle connection failure', () => {
        expect(usersReducer([], {
            type: USERTYPES.GETUSERS_ERROR,
            exception: 'No Server Found'
        })).toEqual (
            {
                users: []
            }
        )
    });*/

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

    const selectedUser = {
        username: 'jsmith',
        name: 'Smith',
        prename: 'John'
    }


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
                selectedUser: selectedUser
            }, {
                type: USERTYPES.GETUSERS_SUCCESS,
                users: [selectedUser]
            })).toEqual(
            {
                selectedUser: selectedUser
            }
        )
    });

    it('should set return state with filled selectedUser', () => {
        expect(selectUserReducer(
            {
            selectedUser: 'bar'
        }, {
            type: USERTYPES.SELECT_USER,
            selectedUser: selectedUser
        })).toEqual(
            {
                selectedUser: selectedUser
            }
        )
    });

    it('should set return state with resetted selectedUser', () => {
        expect(selectUserReducer(
            {
            selectedUser: selectedUser
        }, {
            type: FindMirrorTypes.LOGOUT,
        })).toEqual(
            {
                selectedUser: null
            }
        )
    });

    describe('on refresh', () => {
        describe('selectedUser is still in new user list', () => {
            it('should not alter selectedUser ', () =>{
                expect(selectUserReducer(
                    {
                        selectedUser: { username: 'jsmith', name: 'Smith', prename: 'John' }
                    },
                    {
                        type: USERTYPES.GETUSERS_SUCCESS,
                        users: [{ username: 'jsmith', name: 'Smith', prename: 'John' },
                                { username: 'jsmith', name: 'Smith', prename: 'John' }]
                    }
                )).toEqual(
                    {
                        selectedUser: { username: 'jsmith', name: 'Smith', prename: 'John' }
                    }
                )
            });
        });

        describe('selectedUser is not in new user list', () => {
            it('should set selectedUser to null', () =>{
                expect(selectUserReducer(
                    {
                        selectedUser: { username: 'ElBarto', name: 'Simpson', prename: 'Bart' }
                    },
                    {
                        type: USERTYPES.GETUSERS_SUCCESS,
                        users: [{ username: 'jsmith', name: 'Smith', prename: 'John' },
                                { username: 'jsmith', name: 'Smith', prename: 'John' }]                    }
                )).toEqual(
                    {
                        selectedUser: null
                    }
                )
            });
        });

        describe('called when current selectedUser is still null', () => {
            it('should set selectedUser to null', () =>{
                expect(selectUserReducer(
                    {
                        selectedUser: null
                    },
                    {
                        type: USERTYPES.GETUSERS_SUCCESS,
                        users: [{ username: 'jsmith', name: 'Smith', prename: 'John' },
                                { username: 'jsmith', name: 'Smith', prename: 'John' }]                    }
                )).toEqual(
                    {
                        selectedUser: null
                    }
                )
            });
        });
    });
});