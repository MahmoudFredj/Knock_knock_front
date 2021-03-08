import React, { Component } from 'react';
import Foot from './structure/foot';
import Head from './structure/head';
import MainMenu from './structure/mainMenu';
import '../content/grid.css';
import '../content/style.css';
class App extends Component {
    state = {}
    render() {
        return (
            <div className="app-wrapper">
                <Head />
                <MainMenu />
                <main></main>
                <Foot />
            </div>
        )
    }
}

export default App;
