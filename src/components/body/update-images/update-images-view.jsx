import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import UploadImageButton from '../update-images/file-io/upload-image-button'
import Dropzone from '../update-images/file-io/dropzone'
import ImagePreview from '../update-images/file-io/image-preview'
import SendToMirrorButton from '../update-images/file-io/send-to-mirror'
import {BrowserNotSupported} from '../update-images/file-io/browser-not-supported'
import { getfileApiIsSupported } from '../../../selectors'
import { checkIfFileApiIsSupported } from '../../../actions/file-io-action'


class UpdateImageView extends Component {
    render() {
        this.props.checkIfFileApiIsSupported();

        if (this.props.fileApiSupported === null) {
            return (<div>Loading</div>);
        }

        if (!this.props.fileApiSupported) {
            return (<BrowserNotSupported/>);
        }
        return(
        <div>
            <UploadImageButton/><br/>
            <Dropzone/>
            <ImagePreview/>
            <SendToMirrorButton/>
        </div>       
        );
    }
}

function mapStateToProps(state) {
    return {
        fileApiSupported: getfileApiIsSupported(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
        checkIfFileApiIsSupported
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(UpdateImageView);
