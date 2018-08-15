
export const FILEIO = {
    FILE_IO_SUPPORTED: 'FILE_IO_SUPPORTED',
    ADD_FILES: "ADD_FILES"
};


export function checkIfFileApiIsSupported() {
    apiSupportedResult = window.File && window.FileReader && window.FillList;
    return {
        type: FILEIO.FILE_IO_SUPPORTED,
        apiSupported: apiSupportedResult
    };
}

export function addFiles(files) {
    

    return {
        type: FILEIO.ADD_FILES,
        files: ""
    }
}
