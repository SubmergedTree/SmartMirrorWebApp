import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getUrl, mirrorAccepted, getSelectedUser, getSelectedBodyTab} from '../../selectors' 
import SelectUserView from './sidebar/select-user-view'
import UpdateWidgetView from './update-widgets/update-widget-view'
import UpdateImageView from './update-images/update-images-view'
import BodySelector from './body-selector-view'

class BodyView extends Component {
    render() {
        const selectedTab = this.props.getSelectedBodyTab
        if (this.props.mirrorAccepted && !this.props.selectedUser) {
            return (
                <React.Fragment>
                <div className="sidebar">
                    <SelectUserView/>
                </div>
                </React.Fragment>
            );                    
        } else if (this.props.mirrorAccepted) {
            return (
                <React.Fragment>
                <div className="sidebar">
                    <SelectUserView/>
                </div>
                <div className="body">
                <BodySelector/>
                { selectedTab === 'WIDGETS' ? <UpdateWidgetView/> : <React.Fragment/> }
                { selectedTab === 'IMAGES' ? <UpdateImageView/> : <React.Fragment/> }
                </div>
                </React.Fragment>
            );  
        }
        return (
            <div/>
        );
    }
}

function mapStateToProps(state) {
    return {
        url: getUrl(state),
        selectedUser: getSelectedUser(state),
        mirrorAccepted: mirrorAccepted(state),
        getSelectedBodyTab: getSelectedBodyTab(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(BodyView);
