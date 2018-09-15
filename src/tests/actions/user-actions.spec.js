import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {getUsers, selectUser, resetSelectedUser,
     deleteUser, newUser, USERTYPES} from "../../actions/user-actions";
import expect from 'expect'

const mockStore = configureMockStore([ thunk ]);


describe('getUsers', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
      })

    it('should return an user array when request is successfull', () => {
        const successBody = [
            { 
                name: 'Smith',
                prename: 'John',
                username: 'jsmi' 
            }, 
            {
                name: 'Mmann',
                prename: 'Max',
                username: 'mm' 
            }]

        fetchMock.getOnce('http://foo.com/getUsers', {body: successBody,
        headers: { 'content-type': 'application/json' } })
  
        const expectedActions= [
          {type: USERTYPES.GETUSERS_REQUEST},
          {type: USERTYPES.GETUSERS_SUCCESS, users: successBody}
        ]
  
        const store = mockStore({body: ''});
  
        return store.dispatch(getUsers('http://foo.com')).then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
  
    });

    it('should return GETUSERS_REQUEST when requests is sent', () => {
        //TODO
    });

    it('should return an error when requests fails', () => {
        fetchMock.getOnce('http://foo.com/getUsers', Promise.reject('No Server found'));

        const expectedActions= [
          {type: USERTYPES.GETUSERS_REQUEST},
          {"desc": "No Server found", "id": 0, "name": "GETUSERS_ERROR", "type": "NEW_ERROR"}
        ]
    
        const store = mockStore({status: ''});
        
        return store.dispatch(getUsers('http://foo.com')).then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    });
});


describe('selectUser', () => {

    it('should return an object which contains SELECT_USER type and selectedUser', () => {
        const selectedUser = {
            username: 'jsmith',
            name: 'Smith',
            prename: 'John'
        }

        expect(selectUser(selectedUser)).toEqual({
            type: USERTYPES.SELECT_USER,
            selectedUser: selectedUser
          })
    });

});


describe('resetSelectedUser', () => {

    it('should return an object which contains SELECT_USER type and selectedUser equals null', () => {

        expect(resetSelectedUser()).toEqual({
            type: USERTYPES.SELECT_USER,
            selectedUser: null
          })
    });

});


describe('deleteUser', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
      })

    describe('user is succesfully deleted on mirror', () => {
        it('should return USERTYPES.DELETE_USER and username', () => {
            fetchMock.delete('http://foo.com/deleteUser', 200);
            const expectedActions = [
                {type: USERTYPES.DELETE_USER, username: 'Bart'}
            ]
            const store = mockStore({});
            return store.dispatch(deleteUser('Bart','http://foo.com')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        });
    });

    describe('user is unknown', () => {
        it('should return USERTYPES.DELETE_USER_NOT_FOUND and username', () => {
            fetchMock.delete('http://foo.com/deleteUser', 409);
            const expectedActions = [
                {"desc": "Bart", "id": 1, "name": "DELETE_USER_NOT_FOUND", "type": "NEW_ERROR"}
            ]
            const store = mockStore({});
            return store.dispatch(deleteUser('Bart','http://foo.com')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        });
    });

    describe('an error occurred', () => {
        it('should return USERTYPES.DELETE_USER_ERROR and username', () => {
            fetchMock.delete('http://foo.com/deleteUser', 500);
            const expectedActions = [
                {"desc": "Bart", "id": 2, "name": "DELETE_USER_ERROR", "type": "NEW_ERROR"}
            ]
            const store = mockStore({});
            return store.dispatch(deleteUser('Bart','http://foo.com')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        });
    });
});

describe('newUser', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
      })

    describe('user is succesfully created on mirror', () => {
        it('should return USERTYPES.NEW_USER and username', () => {
            fetchMock.post('http://foo.com/newUser', 200);
            const expectedActions = [
                {type: USERTYPES.NEW_USER, username: 'ElBarto', name: 'Simpson', prename: 'Bart'}
            ]

            const store = mockStore({});
            return store.dispatch(newUser('ElBarto', 'Simpson', 'Bart', 'img','http://foo.com')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        });
    });

    describe('user already exists', () => {
        it('should return USERTYPES.NEW_USER_DUPLICATED and username', () => {
            fetchMock.post('http://foo.com/newUser', 409);
            const expectedActions = [
                {"desc": "ElBarto", "id": 3, "name": "NEW_USER_DUPLICATED", "type": "NEW_ERROR"}
            ]

            const store = mockStore({});
            return store.dispatch(newUser('ElBarto', 'Simpson', 'Bart', 'img','http://foo.com')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        });
    });

    describe('an error occurred', () => {
        it('should return USERTYPES.NEW_USER_ERROR and username', () => {
            fetchMock.post('http://foo.com/newUser', 500);
            const expectedActions = [
                {"desc": "ElBarto", "id": 4, "name": "NEW_USER_ERROR", "type": "NEW_ERROR"}
            ]

            const store = mockStore({});
            return store.dispatch(newUser('ElBarto', 'Simpson', 'Bart', 'img','http://foo.com')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        });
    });
});