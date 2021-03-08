import React, { Component } from 'react';
import Foot from './structure/foot';
import Head from './structure/head';
import MainMenu from './structure/mainMenu';
import { Provider } from "react-redux";
import storeConfiguration from '../store/storeConfiguration';
const store = storeConfiguration();
class App extends Component {
    state = {}
    render() {
        return (
            <Provider store={store}>

            </Provider>
        )
    }
}

export default App;
