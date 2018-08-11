import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import { getSelectedUser } from '../../../selectors'
import { PublicHolidayForm, WeatherForecastForm, WeatherTodayForm, NoteForm } from '../../../components/body/update-widgets/update-widget-forms'

class UpdateWidgetView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedWidgetPosition: null
        }
    }

    onWidgetSelectorClick() {

    }

    render() {
        const selectedUser = this.props.selectedUser;
        const widgetData = this.props.widgetData;
        if (selectedUser && widgetData) {
            return (
                <React.Fragment>
                    
                    <button className="updateWidget1">foobar1</button>
                    <button className="updateWidget2">foobar2</button>
                    <button className="updateWidget3">foobar3</button>
                    <button className="updateWidget4">foobar4</button>

                    <div className="updateFormGrid">

                    <form>
                        <select name="Widgets">
                            <option value="catFacts">Cat Facts</option>
                            <option value="chuckNorisJoke">Chuck Noris Joke</option>
                            <option value="weatherForecast">Weather Forecast</option>
                            <option value="weatherToday">Weather Today</option>
                            <option value="note">Note</option>
                            <option value="publicHoliday">Public Holiday</option>
                            </select>
                        </form>
                        
                        { this.state.selectedWidgetPosition === 'publicHoliday' && <PublicHolidayForm/> }      
                        { this.state.selectedWidgetPosition === 'note' && <NoteForm/> }      
                        { this.state.selectedWidgetPosition === 'weatherForecast' && <WeatherForecastForm/> }      
                        { this.state.selectedWidgetPosition === 'weatherToday' && <WeatherTodayForm/> }      

                    </div>

                </React.Fragment>
            );
        } else {
            return (
                <div>
                    Loading
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        selectedUser: getSelectedUser(state)
    };
}

function dispatchInput(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, dispatchInput)(UpdateWidgetView)
