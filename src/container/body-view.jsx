import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getUrl, mirrorAccepted} from '../selectors/index' 
import SelectUserView from './select-user-view'
import UpdateWidgetView from './update-widget-view'


class BodyView extends Component {
    render() {
        if (this.props.mirrorAccepted) {
            return (
                <React.Fragment>
                <div className="sidebar">
                    <SelectUserView/>
                </div>
                <div className="body">
                <UpdateWidgetView/>
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
        mirrorAccepted: mirrorAccepted(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(BodyView);
