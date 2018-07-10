import restRequest from './rest'

import fetch from 'isomorphic-fetch';

export const FindMirrorTypes = {
    ACCEPT_URL: 'ACCEPT_URL',
    STATUS_REQUEST: 'STATUS_REQUEST',
    STATUS_ERROR: 'STATUS_ERROR',
    STATUS_SUCCESS: 'STATUS_SUCCESS'
};


/*export class FindMirrorActions {
    constructor(restRequest) {
        this.restRequest = restRequest;
    }

    mirrorStatus(url) {
        return this.restRequest(url, (response, body) => ({
           type: FindMirrorTypes.VALIDATE_STATUS,
           error: "invalide url"
        }), (response, body) => ({
            type: '',
            status: body.status
        }));
    }

    acceptUrl(url) {
        return {
            type: FindMirrorTypes.ACCEPT_URL,
            url: url
        };
    }
}*/


export const mirrorStatus = (url) => {
    return function(dispatch) {
        dispatch({
            type: FindMirrorTypes.STATUS_REQUEST
        });
        return fetch(url)
            .then(response => response.json().then(body => ({response, body})))
            .then(({response, body}) => {
                if (!response.ok) {
                    dispatch({
                        type: FindMirrorTypes.STATUS_ERROR,
                        error: response.status //  TODO better error message
                    });
                } else {
                    console.log("success");
                    dispatch ({
                        type: FindMirrorTypes.STATUS_SUCCESS,
                        status: body.status
                    })
                }
            }).then(error => {
                console.log("error msg ");
                dispatch({
                    type: FindMirrorTypes.STATUS_ERROR,
                    error: error
                })
            });
    }
};

export const acceptUrl = (url) => {
    return {
        type: FindMirrorTypes.ACCEPT_URL,
        url: url
    };
}