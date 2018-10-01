
export const BodySelectorTypes = {
  SELECTED_TAP_IMAGES: 'SELECTED_TAP_IMAGES'  ,
  SELECTED_TAP_WIDGETS: 'SELECTED_TAP_WIDGETS',
} 

export const ShowAddUserTypes = {
    SHOW_ADD_USER: 'SHOW_ADD_USER',
    DISCARD_ADD_USER: 'DISCARD_ADD_USER'
}

export const selectImagesTab = () => {
    return {
        type: BodySelectorTypes.SELECTED_TAP_IMAGES,
    };
}

export const selectWidgetsTab = () => {
    return {
        type: BodySelectorTypes.SELECTED_TAP_WIDGETS,
    };
}

export const showAddUser = () => {
    return {
        type: ShowAddUserTypes.SHOW_ADD_USER
    };
}

export const discardAddUser = () => {
    return {
        type: ShowAddUserTypes.DISCARD_ADD_USER
    };
}