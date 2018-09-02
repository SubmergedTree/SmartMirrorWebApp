import {ERROR} from "../actions/error-action";

const INITIAL_ERROR_STATE = {
    errors: []
}

export function errorReducer(state = INITIAL_ERROR_STATE, action) {
    switch(action.type) {
        case ERROR.NEW_ERROR:
            const newErrors = state.errors.slice();
            newErrors.push({
                id: action.id,
                name: action.name,
                desc: action.desc
            })
            return {
                ...state,
                errors: newErrors
            }
        case ERROR.RESOLVE_ERROR: 
            return {
                ...state,
                errors: state.errors.filter(e => e.id !== action.id)
            }
        case ERROR.RESOLVE_ALL:
            return {
                ...state,
                errors: []
            }   
        default:
            return state;
    }
}