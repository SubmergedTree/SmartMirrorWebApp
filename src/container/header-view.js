import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMirrorStatus, getUrl} from '../selectors/index' 
import {bindActionCreators} from 'redux'

import {mirrorStatus, acceptUrl, logout} from '../actions/find-mirror-action'
import {UrlFormView, UrlAcceptButton} from './url-form-view'

class HeaderView extends Component {
    constructor(props) {
        super(props);
        this.state = {url: ''}

        this.handleSubmitUrl = this.handleSubmitUrl.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleSubmitUrl(event) {
        //alert(this.state.url)
        this.props.acceptUrl(this.state.url)
        event.preventDefault();
    }

    handleUrlChange(event) {
        this.setState({url: event.target.value})
        this.props.mirrorStatus(event.target.value)
    }

    handleLogout(event) {
        this.setState({url: ''})
        this.props.logout()
    }

    render() {
        const url = this.props.url
        if (url.length === 0) {
            return (
                <React.Fragment>
                    <div className="headerLabel">
                         SmartMirror Web App
                    </div>
                    <div className="headerUrlForm">
                        <UrlFormView 
                            url={this.state.url} 
                            handleSubmitUrl={this.handleSubmitUrl}
                            handleUrlChange={this.handleUrlChange}
                        />
                    </div>
                        <div className="headerSubmitButton">   
                        {this.props.isMirrorUp === true &&
                            <UrlAcceptButton
                                handleSubmitUrl={this.handleSubmitUrl}
                            />
                        }
                    </div>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
            <div className="headerLabel">
            SmartMirror Web App
            </div>
            <div className="headerLogoutButton"> 
                <button onClick={e => this.handleLogout(e)}>Logout</button>
            </div>
            </React.Fragment>
        );
    }
}


function mapStateToProps(state) {
    return {
        isMirrorUp: getMirrorStatus(state),
        url: getUrl(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
        mirrorStatus: mirrorStatus,
        acceptUrl: acceptUrl,
        logout: logout
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(HeaderView);
