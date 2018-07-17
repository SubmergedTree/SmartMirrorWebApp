import {combineReducers} from 'redux'
import {mirrorStatusReducer, urlReducer} from './find-mirror-reducer'
import {usersReducer} from './user-reducer'


const allReducers = combineReducers({
    mirrorStatus: mirrorStatusReducer,
    urlReducer: urlReducer,
    usersReducer: usersReducer
});


export default allReducers;