import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { addFiles } from '../../../../actions/file-io-action'
import { getSelectedUser } from '../../../../selectors'


class Dropzone extends Component {

    constructor(props) {
        super(props);
        this.dragOverFile = this.dragOverFile.bind(this);
        this.dropFile = this.dropFile.bind(this);
    }

    dragOverFile(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy'; 
    }

    dropFile(event) {
        event.stopPropagation();
        event.preventDefault();
        const files = event.dataTransfer.files;
        this.props.addFiles(files, this.props.selectedUser);
    }

    render() {
        return (
            <div className="dropzone" onDragOver={(event) => this.dragOverFile(event)}
             onDrop={(event) => this.dropFile(event)}>
            Drag your image in this field 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedUser: getSelectedUser(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
        addFiles
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(Dropzone);
