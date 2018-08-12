import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import { getUsers as getUsersSelector, getUrl, getSelectedUser} from '../../../selectors' 
import { getUsers as getUsersAction, selectUser } from '../../../actions/user-actions'


class SelectUserView extends Component {

    componentDidMount() {
        this.props.getUsersAction(this.props.url);
    }

    onUserClick(key) {
        const clickedUser = this.props.users[key];
        this.props.selectUser(clickedUser);
    }

    render() {
        const users = this.props.users;

        return(
            <div className="centerizedHeading">
                Select User
               <ul className="ulSidebar">
                    {
                        users.map((item, key) => {
                            if (this.props.selectedUser && item.username === this.props.selectedUser.username)
                                return <li key={key} onClick={() => this.onUserClick(key)}className="activeSidebar"> <a>{item.username}</a></li>
                            else
                                return <li key={key} onClick={() => this.onUserClick(key)}> <a>{item.username}</a></li>    
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: getUsersSelector(state),
        selectedUser: getSelectedUser(state),
        url: getUrl(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
        getUsersAction: getUsersAction,
        selectUser: selectUser
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(SelectUserView)
