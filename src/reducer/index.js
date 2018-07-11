import {combineReducers} from 'redux'
import findMirrorStatusReducer from './find-mirror-reducer'

const allReducers = combineReducers({
    findMirrorReducer: findMirrorStatusReducer
});


export default allReducers;