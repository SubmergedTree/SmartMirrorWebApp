import {addImageReducer, fileApiIsSupportedReducer} from '../../reducer/file-io-reducer'
import {FILEIO} from '../../actions/file-io-action'

describe('fileApiIsSupportedReducer', () => {

    it('should return the initial state ', () => {
        expect(fileApiIsSupportedReducer(undefined, {})).toEqual(
            {
                fileApiSupported: false
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
            imageOwnerPair: {
                image: "bar",
                owner: "bar"
            }
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
});

/*
        imageOwnerPair: {
            image: image,
            owner: owner
        }
        */