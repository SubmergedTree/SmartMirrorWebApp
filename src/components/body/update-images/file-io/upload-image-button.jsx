import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { addFiles } from '../../../../actions/file-io-action'


class UploadImageButton extends Component {
    render() {
        return (
         <div className="upload-btn-wrapper">
            <button className="button">Upload an image</button>
            <input type="file" accept='image/*' onChange={(event) => {this.props.addFiles(event.target.files)}}
              multiple/>
         </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
        addFiles
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(UploadImageButton);
