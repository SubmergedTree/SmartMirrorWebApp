import {combineReducers} from 'redux'
import {mirrorStatusReducer, urlReducer} from './find-mirror-reducer'
import {usersReducer, selectUserReducer} from './user-reducer'
import {bodySelectorReducer} from './body-selector-reducer'
import {addImageReducer, fileApiIsSupportedReducer} from './file-io-reducer'
import {updateImagesReducer} from './update-reducer'


const allReducers = combineReducers({
    mirrorStatus: mirrorStatusReducer,
    urlReducer,
    usersReducer,
    selectUserReducer,
    bodySelectorReducer,
    addImageReducer,
    fileApiIsSupportedReducer,
    updateImagesReducer
});


export default allReducers;