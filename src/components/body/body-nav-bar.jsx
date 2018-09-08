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
                <div className="navbar">
                    <div className="navbarActive">Images</div>
                    <div onClick={this.props.selectWidgetsTab}>Widgets</div>
                    <span className="navbarFiller"></span>
                    <div className="navbarDeleteUser">Delete this user</div>
                </div>
            );
        } else if (selectedTab === this.TAB_WIDGETS) {
            return (
                <div className="navbar">
                    <div className="bodySelectorFloat" onClick={this.props.selectImagesTab}>Images</div>
                    <div className="navbarActive"> Widgets</div>
                    <span className="navbarFiller"></span>
                    <div className="navbarDeleteUser"> Delete this user</div>
                </div>
            );
        } else {
            return (
                <div className="navbar">
                    <div onClick={this.props.selectImagesTab}>Images</div>
                    <div onClick={this.props.selectWidgetsTab}>Widgets</div>
                    <span className="navbarFiller"></span>
                    <div className="navbarDeleteUser"> Delete this user</div>
                </div>
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
