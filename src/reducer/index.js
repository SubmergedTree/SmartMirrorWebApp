import {combineReducers} from 'redux'
import {mirrorStatusReducer, acceptUrlReducer} from './find-mirror-reducer'

const allReducers = combineReducers({
    mirrorStatus: mirrorStatusReducer,
    acceptUrl: acceptUrlReducer
});


export default allReducers;