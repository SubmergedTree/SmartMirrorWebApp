
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

export const getImagesOfSelectedUser = state => {
    const selectedUser = getSelectedUser(state);
    const images = state.addImageReducer.images;
    const filteres =  images
                .map(img => img.imageOwnerPair)
                .filter(img =>  img.owner === selectedUser)
                .map(img => img.image)
    return filteres
}

export const getErrors = state => state.errorReducer.errors