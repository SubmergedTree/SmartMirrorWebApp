import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getSelectedBodyTab, getSelectedUser} from '../../selectors' 
import { selectImagesTab, selectWidgetsTab } from '../../actions/body-selector-action'


class BodyNavBar extends Component {
    constructor(props) {
        super(props)
        
        this.TAB_IMAGES = 'IMAGES'
        this.TAB_WIDGETS = 'WIDGETS'
    }

    render() {
        const selectedTab = this.props.activeTab
        if (selectedTab === this.TAB_IMAGES) {
            return (
                <ul className="bodySelector">
                    <li className="bodySelectorFloatActive"> <a>Images</a></li>
                    <li className="bodySelectorFloat" onClick={this.props.selectWidgetsTab}> <a>Widgets</a></li>
                    <li className="deleteUser"> <a>Delete this user</a></li>
                </ul>
            );
        } else if (selectedTab === this.TAB_WIDGETS) {
            return (
                <ul className="bodySelector">
                    <li className="bodySelectorFloat" onClick={this.props.selectImagesTab}> <a>Images</a></li>
                    <li className="bodySelectorFloatActive"> <a>Widgets</a></li>
                    <li className="deleteUser"> <a>Delete this user</a></li>
                </ul>
            );
        } else {
            return (
                <ul className="bodySelector">
                    <li className="bodySelectorFloat" onClick={this.props.selectImagesTab}> <a>Images</a></li>
                    <li className="bodySelectorFloat" onClick={this.props.selectWidgetsTab}> <a>Widgets</a></li>
                    <li className="deleteUser"> <a>Delete this user</a></li>
                </ul>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        activeTab: getSelectedBodyTab(state),
        selectedUser: getSelectedUser(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
        selectImagesTab: selectImagesTab,
        selectWidgetsTab: selectWidgetsTab
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(BodyNavBar);
