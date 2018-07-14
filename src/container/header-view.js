import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMirrorStatus} from '../selectors/index' 
import {bindActionCreators} from 'redux'

import {mirrorStatus} from '../actions/find-mirror-action'
import {UrlFormView} from './url-form-view'

class HeaderView extends Component {
    constructor(props) {
        super(props);
        this.state = {url: ''}

        this.handleSubmitUrl = this.handleSubmitUrl.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
    }

    handleSubmitUrl(event) {
        alert(this.state.url)
        event.preventDefault();
    }

    handleUrlChange(event) {
        this.setState({url: event.target.value})
    }

    render() {
        if (!this.props.isMirrorUp) {
            return (
                <div>
                <UrlFormView 
                    url={this.state.url} 
                    handleSubmitUrl={this.handleSubmitUrl}
                    handleUrlChange={this.handleUrlChange}
                />
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
