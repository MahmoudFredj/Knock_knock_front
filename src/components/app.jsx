import React, { Component } from 'react';
import Foot from './structure/foot';
import Head from './structure/head';
import MainMenu from './structure/mainMenu';
import { Provider } from "react-redux";
import storeConfiguration from '../store/storeConfiguration';
import DoorPage from './door/doorPage';
const store = storeConfiguration();
class App extends Component {
    state = {}
    render() {
        return (
            <Provider store={store}>
                <div className="app-wrapper">
                    <Head />
                    <MainMenu />
                    <main>
                        <DoorPage />
                    </main>
                    <Foot />
                </div>
            </Provider>
        )
    }
}

export default App;
