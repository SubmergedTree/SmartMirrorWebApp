import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducer'
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // DEV
const store = createStore(allReducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))); //DEV
//const store = createStore(allReducers, applyMiddleware(thunk)); PROD

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
