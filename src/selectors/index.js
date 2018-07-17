
export const getMirrorStatus = state => state.mirrorStatus.mirrorFound

export const getUrl = state => state.urlReducer.url

export const mirrorAccepted = state => {
    const url = state.urlReducer.url;
    return url.length !== 0;
};

export const getUsers = state => state.usersReducer.users