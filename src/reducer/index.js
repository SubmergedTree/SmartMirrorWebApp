import {combineReducers} from 'redux'
import {mirrorStatusReducer, acceptUrlReducer} from './find-mirror-reducer'

const allReducers = combineReducers({
    mirrorStatusReducer: mirrorStatusReducer,
    acceptUrlReducer: acceptUrlReducer
});


export default allReducers;