import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './Redux';
import history from './Services/history';
import './App.css';

// Styles
import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css'

import { DefaultLayout } from './Containers';

const store = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path='/' component={DefaultLayout} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
