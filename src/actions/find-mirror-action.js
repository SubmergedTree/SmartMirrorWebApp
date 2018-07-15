import 'isomorphic-fetch';
import {UrlEndpoints} from '../urlEndpoints'

export const FindMirrorTypes = {
    ACCEPT_URL: 'FIND_MIRROR_ACCEPT_URL',
    STATUS_REQUEST: 'FIND_MIRROR_STATUS_REQUEST',
    STATUS_ERROR: 'FIND_MIRROR_STATUS_ERROR',
    STATUS_SUCCESS: 'FIND_MIRROR_STATUS_SUCCESS',
    STATUS_LOGOUT: 'STATUS_LOGOUT'
};


function fetchMirrorStatusRequest(url) {
    return {
        type: FindMirrorTypes.STATUS_REQUEST,
    };
}

function fetchMirrorStatusSuccess(body) {
    return {
        type: FindMirrorTypes.STATUS_SUCCESS,
        status: body.status
      };
}

function fetchMirrorStatusFailure(ex) {
    return {
        type: FindMirrorTypes.STATUS_ERROR,
        exception: ex
      }
}


export const mirrorStatus = (url) => {
    url = url + UrlEndpoints.status;
    return dispatch => {
        try {
            dispatch(fetchMirrorStatusRequest())
            return fetch(url)
            .then(res => res.json())
            .then(body => dispatch(fetchMirrorStatusSuccess(body)))
            .catch(ex => dispatch(fetchMirrorStatusFailure(ex)))
        } catch(e) {
            dispatch(fetchMirrorStatusFailure(e)); 
        }
      }
};


export const acceptUrl = (url) => {
    return {
        type: FindMirrorTypes.ACCEPT_URL,
        url: url
    };
}


export const logout = () => {
    return {
        type: FindMirrorTypes.STATUS_LOGOUT
    };
}
