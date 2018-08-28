import {addFiles, checkIfFileApiIsSupported, FILEIO} from "../../actions/file-io-action";
import expect from 'expect'

describe('checkIfFileApiIsSupported', () => {
    it('should return false', () => {
       Object.defineProperty(global.window, 'File', {}); // TODO better mocking and test which expect true 
       Object.defineProperty(global.window, 'FileReader', {});
        expect(checkIfFileApiIsSupported()).toEqual({
            type: FILEIO.FILE_IO_SUPPORTED,
            apiSupported: false
        });
    });
});

describe('addFiles', () => {
    it('should create image owner pairs and return them', () => {
        const files = ["file1", "file2"];
        const owner = "Homer S.";
        expect(addFiles(files, owner)).toEqual({
            type: FILEIO.ADD_IMAGE,
            imageOwnerPairs: [
                {
                    imageOwnerPair: {
                        image: files[0],
                        owner
                    }
                },
                {
                    imageOwnerPair: {
                        image: files[1],
                        owner
                    }
                }
            ]   
        });
    });

    it('should return empty imageOwnerPairs array', () => {
        const files = [];
        const owner = "Homer S.";
        expect(addFiles(files, owner)).toEqual({
            type: FILEIO.ADD_IMAGE,
            imageOwnerPairs: [
            ]   
        });
    });
});