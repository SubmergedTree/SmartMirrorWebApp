import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {UPDATE_ACTION_TYPES, sendImagesToMirror} from "../../actions/update-actions";
import expect from 'expect'

const mockStore = configureMockStore([ thunk ]);

// TODO test form data
describe('sendImagesToMirror', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
      })

    it('should send images in correct format to server', () => {
        fetchMock.post('http://foo.com/addPictures', {body: {"status": "ok"}});
        const expectedActions = [
            {type: UPDATE_ACTION_TYPES.START_SENDING, username: 'Bart'},
            {type: UPDATE_ACTION_TYPES.IMAGES_TRANSFERRED, username: 'Bart'}
        ]

        const store = mockStore({});
        return store.dispatch(sendImagesToMirror('Bart',['a', 'b'],'http://foo.com')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
          })

    });

    it('should return FAILED_IMAGES_TRANSFER if the status code is not 201', () => {
        fetchMock.post('http://foo.com/addPictures', 400);

        const expectedActions = [
            {type: UPDATE_ACTION_TYPES.START_SENDING, username: 'Lisa'},
            {type: UPDATE_ACTION_TYPES.FAILED_IMAGES_TRANSFER, username: 'Lisa'},
        ]

        const store = mockStore({});
        return store.dispatch(sendImagesToMirror('Lisa', ['a', 'b'],'http://foo.com')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
          })

    });

    it('should return NO_IMAGES if the images array is empty', () => {
        expect(sendImagesToMirror('Marge', [], 'http://foo.com')).toEqual({
            type: UPDATE_ACTION_TYPES.NO_IMAGES,
          })
    });
});
