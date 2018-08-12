import {combineReducers} from 'redux'
import {mirrorStatusReducer, urlReducer} from './find-mirror-reducer'
import {usersReducer, selectUserReducer} from './user-reducer'
import {bodySelectorReducer} from './body-selector-reducer'


const allReducers = combineReducers({
    mirrorStatus: mirrorStatusReducer,
    urlReducer: urlReducer,
    usersReducer: usersReducer,
    selectUserReducer: selectUserReducer,
    bodySelectorReducer: bodySelectorReducer
});


export default allReducers;