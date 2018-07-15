import {combineReducers} from 'redux'
import {mirrorStatusReducer, urlReducer} from './find-mirror-reducer'

const allReducers = combineReducers({
    mirrorStatus: mirrorStatusReducer,
    urlReducer: urlReducer
});


export default allReducers;