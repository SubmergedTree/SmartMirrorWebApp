import restRequest from './rest'

import 'isomorphic-fetch';

export const FindMirrorTypes = {
    ACCEPT_URL: 'ACCEPT_URL',
    STATUS_REQUEST: 'STATUS_REQUEST',
    STATUS_ERROR: 'STATUS_ERROR',
    STATUS_SUCCESS: 'STATUS_SUCCESS'
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
    try {
    return dispatch => {
        dispatch(fetchMirrorStatusRequest())
        return fetch(url)
          .then(res => res.json())
          .then(body => dispatch(fetchMirrorStatusSuccess(body)))
          .catch(ex => dispatch(fetchMirrorStatusFailure(ex)))
      }
    } catch(e) {
        dispatch(fetchMirrorStatusFailur(e)); 
    }
};


export const acceptUrl = (url) => {
    return {
        type: FindMirrorTypes.ACCEPT_URL,
        url: url
    };
}

