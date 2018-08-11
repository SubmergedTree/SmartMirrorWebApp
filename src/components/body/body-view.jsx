import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getUrl, mirrorAccepted} from '../../selectors' 
import SelectUserView from './sidebar/select-user-view'
import UpdateWidgetView from './update-widgets/update-widget-view'
import UpdateImageView from './update-images/update-images-view'
import BodySelector from './body-selector-view'

class BodyView extends Component {
    render() {
        if (this.props.mirrorAccepted) {
            return (
                <React.Fragment>
                <div className="sidebar">
                    <SelectUserView/>
                </div>
                <div className="body">
                <BodySelector/>
                <UpdateWidgetView/>
                <UpdateImageView/>
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
