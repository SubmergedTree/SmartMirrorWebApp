import 'isomorphic-fetch';
import {UrlEndpoints} from '../urlEndpoints'


export const USERTYPES = {
    GETUSERS_SUCCESS: 'GETUSERS_SUCCESS',
    GETUSERS_ERROR: 'GETUSERS_ERROR',
    GETUSERS_REQUEST: 'GETUSERS_REQUEST'
};


function getUsersStatusRequest(url) {
    return {
        type: USERTYPES.GETUSERS_REQUEST
    };
}

function getUsersStatusSuccess(body) {
    return {
        type: USERTYPES.GETUSERS_SUCCESS,
        users: body
      };
}

function getUsersStatusFailure(ex) {
    return {
        type: USERTYPES.GETUSERS_ERROR,
        exception: ex
      }
}

export const getUsers = (url) => {
    url = url + UrlEndpoints.getUsers;
    return dispatch => {
        try {
            dispatch(getUsersStatusRequest())
            return fetch(url)
            .then(res => res.json())
            .then(body => dispatch(getUsersStatusSuccess(body)))
            .catch(ex => dispatch(getUsersStatusFailure(ex)))
        } catch(e) {
            dispatch(getUsersStatusFailure(e)); 
        }
      }
};