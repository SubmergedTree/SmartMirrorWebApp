import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import { getUsers as getUsersSelector, getUrl} from '../selectors/index' 
import { getUsers as getUsersAction } from '../actions/user-actions'


class SelectUserView extends Component {

    componentDidMount() {
        this.props.getUsersAction(this.props.url);
    }

    onUserClick(key) {
        const clickedUser = this.props.users[key];
        
    }

    render() {
        const users = this.props.users;

        return(
            <div className="centerizedHeading">
                Select User
               <ul>
                    {
                        users.map((item, key) => {
                            return <li key={key} onClick={() => this.onUserClick(key)}> <a>{item.username}</a></li>
                        })
                    }
                </ul>
            </div>
        );

     /*   return(
            <div className="centerizedHeading">
                Select User
                <ul>
                <li><a className="active">User 1</a></li>
                <li><a> News</a></li>
                <li><a> Contact</a></li>
                <li><a> About</a></li>
                </ul>
            </div>
        );*/
    }
}

function mapStateToProps(state) {
    return {
        users: getUsersSelector(state),
        url: getUrl(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
        getUsersAction: getUsersAction
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(SelectUserView)
