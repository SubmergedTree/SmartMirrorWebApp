import 'isomorphic-fetch';
import {UrlEndpoints} from '../urlEndpoints'

export const UPDATE_ACTION_TYPES = {
    IMAGES_TRANSFERRED: 'IMAGES_TRANSFERRED',
    FAILED_IMAGES_TRANSFER: 'FAILED_IMAGES_TRANSFER',
    START_SENDING: 'START_SENDING'
}

function failedToSendImages(username) {
    return {
        type: UPDATE_ACTION_TYPES.FAILED_IMAGES_TRANSFER,
        username
    }
}

function successfulImagesTransfer(body, username) {
    return {
        type: UPDATE_ACTION_TYPES.IMAGES_TRANSFERRED,
        username
    }
}

function startSending(username) {
    return {
        type: UPDATE_ACTION_TYPES.START_SENDING,
        username
    }
}

export function sendImagesToMirror(username, images, url) {
    url = url + UrlEndpoints.addPictures;

    const formData = new FormData();
    formData.append('numberOf', images.length);
    formData.append('username', username);
    for (let imageNum = 0; imageNum < images.length; imageNum++) {
        const nameNum = (imageNum + 1).toString();
        formData.append(nameNum, images[imageNum], nameNum);
    }

    return dispatch => {
        try {
            dispatch(startSending(username))
            return fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                body: formData
            })
            .then(res => res.json())
            .then(res => dispatch(successfulImagesTransfer(res, username)))
            .catch(ex => dispatch(failedToSendImages(username)))
        } catch(e) {
            dispatch(failedToSendImages(e)); 
        }
      }
}
