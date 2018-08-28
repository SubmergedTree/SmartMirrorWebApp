import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { sendImagesToMirror } from '../../../../actions/update-actions'
import {getImagesOfSelectedUser, getUrl, getSelectedUser} from '../../../../selectors'


class SendToMirrorButton extends Component {
    render() {
        return (
         <div className="upload-btn-wrapper">
            <button className="button" onClick={() => this.props.sendImagesToMirror(this.props.selectedUser, this.props.images,
                 this.props.mirrorUrl)}>Upload to SmartMirror</button>
         </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        images: getImagesOfSelectedUser(state),
        mirrorUrl: getUrl(state),
        selectedUser: getSelectedUser(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
        sendImagesToMirror
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(SendToMirrorButton);
