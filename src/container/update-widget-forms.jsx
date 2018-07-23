import React from 'react';


export function PublicHolidayForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={e => props.handleSubmitUrl(e)}>
                    <input type="text" 
                        placeholder="Enter SmartMirror URL" 
                        value={props.url} 
                        onChange={e => props.handleUrlChange(e)}
                    /> 
                    <input type="text" 
                        placeholder="Enter SmartMirror URL" 
                        value={props.url} 
                        onChange={e => props.handleUrlChange(e)}
                    />
            </form>
        </React.Fragment>
    );
}

export function WeatherTodayForm(props) {
    return (
        <React.Fragment>

        </React.Fragment>
    );
}

export function WeatherForecastForm(props) {
    return (
        <React.Fragment>

        </React.Fragment>
    );
}

export function NoteForm(props) {
    return (
        <React.Fragment>

        </React.Fragment>
    );
}