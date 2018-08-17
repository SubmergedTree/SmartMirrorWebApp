
export const getMirrorStatus = state => state.mirrorStatus.mirrorFound

export const getUrl = state => state.urlReducer.url

export const mirrorAccepted = state => {
    const url = state.urlReducer.url;
    return url.length !== 0;
};

export const getUsers = state => state.usersReducer.users

export const getSelectedUser = state => state.selectUserReducer.selectedUser

export const getSelectedBodyTab = state => state.bodySelectorReducer.tab

export const getfileApiIsSupported = state => state.fileApiIsSupportedReducer.fileApiSupported

export const getImages = state => state.addImageReducer.images
