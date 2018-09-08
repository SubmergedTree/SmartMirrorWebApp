import React from 'react';


export function UrlFormView(props) {
    return (
        <div>
            <form onSubmit={e => props.handleSubmitUrl(e)}>
                    <input type="text" 
                        placeholder="Enter SmartMirror URL" 
                        value={props.url} 
                        onChange={e => props.handleUrlChange(e)}
                    />
                {props.isMirrorUp === true &&
                    <button className="button"  onClick={e => props.handleSubmitUrl(e)}>Submit</button>
                }
            </form>
        </div>
    );
}