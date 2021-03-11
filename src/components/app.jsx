import React, { Component } from 'react';

import { Provider } from "react-redux";
import storeConfiguration from '../store/storeConfiguration';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './home/homePage';
import Login from './login/login';
import Register from './login/register';
const store = storeConfiguration();
class App extends Component {
    state = {}
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
