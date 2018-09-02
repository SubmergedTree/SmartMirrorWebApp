import 'isomorphic-fetch';
import {UrlEndpoints} from '../urlEndpoints'


export const USERTYPES = {
    GETUSERS_SUCCESS: 'GETUSERS_SUCCESS',
    GETUSERS_ERROR: 'GETUSERS_ERROR',
    GETUSERS_REQUEST: 'GETUSERS_REQUEST',
    SELECT_USER: 'SELECT_USER',
    DELETE_USER: 'DELETE_USER',
    DELETE_USER_ERROR: 'DELETE_USER_ERROR',
    DELETE_USER_NOT_FOUND: 'DELETE_USER_NOT_FOUND',
    NEW_USER: 'NEW_USER',
    NEW_USER_ERROR: 'NEW_USER_ERROR',
    NEW_USER_DUPLICATED: 'NEW_USER_DUPLICATED'
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

export const selectUser = (selectedUser) => {
    return {
        type: USERTYPES.SELECT_USER,
        selectedUser: selectedUser
    };
}

export const resetSelectedUser = () => {
    return {
        type: USERTYPES.SELECT_USER,
        selectedUser: null
    };
}


function successfulDeleteUser(statusCode, username) {
    if (statusCode === 200) {
        return {    
            type: USERTYPES.DELETE_USER,
            username
        }
    } else if (statusCode === 409) {
        return {    
            type: USERTYPES.DELETE_USER_NOT_FOUND,
            username
        }
    } else {
        return {    
            type: USERTYPES.DELETE_USER_ERROR,
            username
        }
    }
}

function failedDeleteUser(ex, username) {
    return {
        type: USERTYPES.DELETE_USER_ERROR,
        username
    }
}

export const deleteUser = (username, url) => {
    url = url + UrlEndpoints.deleteUser;

    const formData = new FormData();
    formData.append('username', username);

    return dispatch => {
        try {
            return fetch(url, {
                method: 'DELETE',
                body: formData
            })
            .then(res => dispatch(successfulDeleteUser(res.status, username)))
            .catch(ex => dispatch(failedDeleteUser(ex, username)))
        } catch(ex) {
            dispatch(failedDeleteUser(ex, username)); 
        }
    }
}


function successfulNewUser(statusCode, username, name, prename) {
    if (statusCode === 200) {
        return {    
            type: USERTYPES.NEW_USER,
            username,
            name,
            prename
        }
    } else if (statusCode === 409) {
        return {    
            type: USERTYPES.NEW_USER_DUPLICATED,
            username
        }
    } else {
        return {    
            type: USERTYPES.NEW_USER_ERROR,
            username
        }
    }
}

function failedNewUser(ex, username) {
    return {
        type: USERTYPES.NEW_USER_ERROR,
        username
    }
} 

export const newUser = (username, name, prename, image, url) => {
    url = url + UrlEndpoints.newUser;
    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('name', username);
    formData.append('prename', username);
    formData.append('image', image);

    return dispatch => {
        try {
            return fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => dispatch(successfulNewUser(res.status, username, name , prename)))
            .catch(ex => dispatch(failedNewUser(ex, username)))
        } catch(ex) {
            dispatch(failedNewUser(ex, username)); 
        }
    }
}