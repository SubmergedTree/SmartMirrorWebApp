function restGet(url, requestSendType, responseFailureEval, responseSuccessEval) {
    return function(dispatch) {
        dispatch({
            type: requestSendType
        });
        return fetch(url)
            .then(response => response.json().then(body => ({response, body})))
            .then(({response, body}) => {
                if (!response.ok) {
                    dispatch(responseFailureEval(response, body));
                } else {
                    dispatch (responseSuccessEval(response, body));
                }
            });
    }
}

function restPost() {
    // TODO
}

function restDelete() {
    // TODO
}

