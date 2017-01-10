import React from 'react';
import {render} from 'react-dom';

import {createStore} from 'redux';
import {reducer, initialState} from './reducer/index';

import {Provider} from 'react-redux';
import AppContainer from './containers/AppContainer';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {customStyles} from '../styles/custom.scss';

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,

    document.getElementById('app')
);
