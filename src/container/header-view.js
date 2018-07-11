import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMirrorStatus} from '../selectors/index' 
import {bindActionCreators} from 'redux'

import {mirrorStatus} from '../actions/find-mirror-action'

class HeaderView extends Component {

    render() {
        if (!this.props.isMirrorUp) {
            return (
                <div>
                <div className="enterSmartMirrorUrl"> Enter SmartMirror URL</div>
                <button  onClick={() => this.props.mirrorStatus('foo')}>FIND</button>
                </div>
            );
        }
        return (
            <div> Mirror found</div>
        );
    }

}


function mapStateToProps(state) {
    return {
        isMirrorUp: getMirrorStatus(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({mirrorStatus: mirrorStatus}, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(HeaderView);
