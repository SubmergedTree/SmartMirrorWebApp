import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {getUsers, selectUser, USERTYPES} from "../../actions/user-actions";
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
          {type: USERTYPES.GETUSERS_ERROR, exception: 'No Server found'}
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