import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import UploadImageButton from '../update-images/file-io/upload-image-button'
import Dropzone from '../update-images/file-io/dropzone'
import ImagePreview from '../update-images/file-io/image-preview'
import SendToMirrorButton from '../update-images/file-io/send-to-mirror'


class UpdateImageView extends Component {
    render() {
        return(
        <React.Fragment>
            <UploadImageButton/>
            <Dropzone/>
            <ImagePreview/>
            <SendToMirrorButton/>
        </React.Fragment>       
        );
    }
}

export default UpdateImageView