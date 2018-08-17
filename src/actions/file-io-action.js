
export const FILEIO = {
    FILE_IO_SUPPORTED: 'FILE_IO_SUPPORTED',
    ADD_IMAGE: "ADD_FILES"
};


export function checkIfFileApiIsSupported() {
    const apiSupportedResult = window.File && window.FileReader && window.FillList;
    return {
        type: FILEIO.FILE_IO_SUPPORTED,
        apiSupported: apiSupportedResult
    };
}

function storeImage(image) {
    return {
        type: FILEIO.ADD_IMAGE,
        image: image
    };
}

export function addFiles(files) {
    return dispatch => {
        const readerList = [];
        for (let i = 0; i < files.length; i++) {
            let newReader = new FileReader();
            readerList.push(newReader);
            newReader.onload = (e) => {
                const image = newReader.result;
                dispatch(storeImage(image))
            }
            newReader.readAsDataURL(files[i]);
        }
    }
}

export function deleteImageByIndex(index) {

}