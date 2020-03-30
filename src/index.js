import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

import App from '../src/components/app/app';
import ErrorBoundry from "./components/error-boundry/error-boundry";
import StoreService from "./services/service";
import {StoreServiceContext} from "./components/store-service-context/store-service-context";

import store from "./store";

const storeService = new StoreService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <StoreServiceContext.Provider value={storeService}>
                <Router>
                    <App />
                </Router>
            </StoreServiceContext.Provider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);