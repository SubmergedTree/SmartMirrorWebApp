import React from 'react';


export function UrlFormView(props) {
    return (
        <div>
            <form onSubmit={e => props.handleSubmitUrl(e)}>
                <label>
                    Enter Url:
                    <input type="text"  
                        value={props.url} 
                        onChange={e => props.handleUrlChange(e)}
                    />
                </label>
            </form>
        </div>
    );
}

