import {addImageReducer, fileApiIsSupportedReducer} from '../../reducer/file-io-reducer'
import {FILEIO} from '../../actions/file-io-action'
import { FindMirrorTypes } from '../../actions/find-mirror-action';
import { UPDATE_ACTION_TYPES } from '../../actions/update-actions'


describe('fileApiIsSupportedReducer', () => {

    it('should return the initial state ', () => {
        expect(fileApiIsSupportedReducer(undefined, {})).toEqual(
            {
                fileApiSupported: null
            }
        )
    });

    it('should set fileApiSupported to true ', () => {
        expect(fileApiIsSupportedReducer([], {       
            type: FILEIO.FILE_IO_SUPPORTED,
            apiSupported: true
        })).toEqual(
            {
                fileApiSupported: true
            }
        )
    });
});


describe('addImageReducer', () => {

    it('should return the initial state ', () => {
        expect(addImageReducer(undefined, {})).toEqual(
            {
                images: []
            }
        )
    });

    it('should add an image', () => {
        expect(addImageReducer({
            images: [ {
                image: "foo",
                owner: "foo"
            }]
        }, {       
            type: FILEIO.ADD_IMAGE,
            imageOwnerPairs: [{
                image: "bar",
                owner: "bar"
            }]
        })).toEqual(
            {
                images: [{
                    image: "foo",
                    owner: "foo"
                },
                {
                    image: "bar",
                    owner: "bar"
                }]
            }
        )
    });

    it('should delete all images when logout', () => {
        expect(addImageReducer({
            images: [ {
                image: "foo",
                owner: "foo"
            }]
        }, {       
            type: FindMirrorTypes.LOGOUT
        })).toEqual(
            {
                images: []
            }
        )
    });

    it('should delete all images associated with an user', () => {
        expect(addImageReducer({
            images: [ {imageOwnerPair:{
                image: "foo",
                owner:{username: "foo"}
            }},
            {imageOwnerPair:{
                image: "bar",
                owner: {username: "bar"}
            }}]
        }, {       
            type: UPDATE_ACTION_TYPES.IMAGES_TRANSFERRED,
            username: "bar"
        })).toEqual(
            {
                images: [ {imageOwnerPair:{
                    image: "foo",
                    owner:{username: "foo"}
                }}]
            }
        )
    });
});
