import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import { getSelectedUser } from '../selectors'

class UpdateWidgetView extends Component {

    render() {
        const selectedUser = this.props.selectedUser;
        if (selectedUser) {
            return (
                <div>
                    {selectedUser.username}
                </div>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        selectedUser: getSelectedUser(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(UpdateWidgetView)
