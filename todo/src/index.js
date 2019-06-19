import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer';
import { loadState, saveState } from './localStorage.js';
import './index.css';
import App from './App';

const persistedState = loadState();
const store = createStore(
    reducer,
    persistedState,
    /* preloadedState, */
    // this line below makes it possible to use the ReduxDevTool on the browser
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// saves a copy of store to localStorage upon change
store.subscribe(() => {
    saveState(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
