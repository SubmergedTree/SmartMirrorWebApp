import React, {Component} from 'react';


export class SelectUserView extends Component {
    render() {
        return(
            <div className="centerizedHeading">
                Select User
                <ul>
                <li><a className="active">User 1</a></li>
                <li><a> News</a></li>
                <li><a> Contact</a></li>
                <li><a> About</a></li>
                </ul>
            </div>
        );
    }
}

