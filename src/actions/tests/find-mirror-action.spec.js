import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {acceptUrl, mirrorStatus,FindMirrorTypes, logout} from "../find-mirror-action";
import expect from 'expect'

const mockStore = configureMockStore([ thunk ]);


describe('acceptUrl', () => {

  it('should create ACCEPT_URL action', () => {
    expect(acceptUrl('localhost:3000')).toEqual({
      type: FindMirrorTypes.ACCEPT_URL,
      url: 'localhost:3000'
    })
  });
});

describe('logout', () => {
  it('should create STATUS_LOGOUT action', () => {
    expect(logout()).toEqual({
      type: FindMirrorTypes.STATUS_LOGOUT
    })
  });
});

describe('mirrorStatus is triggered and STATUS_REQUEST type is emmitted', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should return an error when it could not get any response', () => {
    fetchMock.getOnce('http://foo.com/status', Promise.reject('No Server found'));

    const expectedActions= [
      {type: FindMirrorTypes.STATUS_REQUEST},
      {type: FindMirrorTypes.STATUS_ERROR, exception: 'No Server found'}
    ]

    const store = mockStore({status: ''});
    
    return store.dispatch(mirrorStatus('http://foo.com')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })

  });

  it('should return the status message if the request was successfull', () => {
    fetchMock.getOnce('http://foo.com/status', {body: {status: 'up'},
      headers: { 'content-type': 'application/json' } })

      const expectedActions= [
        {type: FindMirrorTypes.STATUS_REQUEST},
        {type: FindMirrorTypes.STATUS_SUCCESS, status: 'up'}
      ]

      const store = mockStore({status: ''});

      return store.dispatch(mirrorStatus('http://foo.com')).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })

  }); 

});
