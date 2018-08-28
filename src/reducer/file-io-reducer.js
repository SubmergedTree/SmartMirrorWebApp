import { FILEIO } from "../actions/file-io-action";
import { FindMirrorTypes } from "../actions/find-mirror-action";
import { UPDATE_ACTION_TYPES } from '../actions/update-actions'


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
                images: state.images.concat(action.imageOwnerPairs)

            }
        case FindMirrorTypes.LOGOUT:
            return {
                ...state,
                images: []
            }
        case UPDATE_ACTION_TYPES.IMAGES_TRANSFERRED:
            const filteredImages = state.images.filter(img => img.owner !== action.username);
            return {
                ...state,
                images: filteredImages
            }
        default:
            return state;
    }
}
