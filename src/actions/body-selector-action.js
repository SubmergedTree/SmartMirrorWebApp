
export const BodySelectorTypes = {
  SELECTED_TAP_IMAGES: 'SELECTED_TAP_IMAGES'  ,
  SELECTED_TAP_WIDGETS: 'SELECTED_TAP_WIDGETS'
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
