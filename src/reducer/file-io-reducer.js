import { FILEIO } from "../actions/file-io-action";
import { FindMirrorTypes } from "../actions/find-mirror-action";


const INITIAL_FILE_API_SUPPPORTED_STATE = {
    fileApiSupported: false
}

const INITIAL_IMAGES_STATE = {
    images: []
}

export function fileApiIsSupportedReducer(state = INITIAL_FILE_API_SUPPPORTED_STATE, action) {
    switch(action.type) {
        case FILEIO.FILE_IO_SUPPORTED:
            return Object.assign({}, state, {
                fileApiSupported: true
            });
        default:
            return state;
    }
}

export function addImageReducer(state = INITIAL_IMAGES_STATE, action) {
    switch(action.type) {
        case FILEIO.ADD_IMAGE: 
            return {
                ...state,
                images: [...state.images, action.image]

            }
        case FindMirrorTypes.LOGOUT:
            return {
                ...state,
                images: []
            }
        default:
            return state;
    }
}
