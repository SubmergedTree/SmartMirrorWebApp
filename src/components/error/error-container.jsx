import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import { getErrors } from '../../selectors' 
import Error from './error' 


class ErrorContainer extends Component {

    render() {
        const errors = this.props.errors;
        console.log(errors);
        return (
            <React.Fragment>
            {
                errors.map((error, key) => {
                    return <Error error={error}/>
                })
            }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: getErrors(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(ErrorContainer)
