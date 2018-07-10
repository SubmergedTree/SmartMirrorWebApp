import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {acceptUrl, mirrorStatus,FindMirrorTypes} from "../find-mirror-action";
import expect from 'expect'

const mockStore = configureMockStore([ thunk ]);


describe('acceptUrl is triggered', () => {

  it('should create ACCEPT_URL action', () => {
    expect(acceptUrl('localhost:3000')).toEqual({
      type: FindMirrorTypes.ACCEPT_URL,
      url: 'localhost:3000'
    })
  });
});



describe('mirrorStatus is triggered', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should return the string "invalide url" when it could not get any response', () => {
    
  });

  it('should return the status message if the request was succesfull', () => {
    fetchMock.getOnce('/status', {body: {status: 'up'},
      headers: { 'content-type': 'application/json' } })

      const expectedActions= [
        {type: FindMirrorTypes.STATUS_REQUEST},
        {type: FindMirrorTypes.STATUS_SUCCESS, body: {status: 'up'}}
      ]

      const store = mockStore({status: ''});

      return store.dispatch(mirrorStatus('http://foo.com/status')).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })

  }); 

});
