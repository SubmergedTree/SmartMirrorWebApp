import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import { resolveError } from '../../actions/error-action' 


class Error extends Component {
    constructor(props) {
        super(props);

        this.handleDiscard = this.handleDiscard.bind(this);
    }

    handleDiscard(event) {
        this.props.resolveError(this.props.error.id);
        event.preventDefault();
    }

    render() {
        return (
            <div className="error"> 
               <p className="errorLeft">
                    <span className="errorText">{this.props.error.name} - {this.props.error.desc}</span>
                    <span className="errorRight">
                        <button className="button" onClick={e => this.handleDiscard(e)}>Discard</button>
                    </span>
                </p> 

                <div className="errorClear"></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
        resolveError: resolveError
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(Error)

