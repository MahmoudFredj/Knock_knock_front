import React, { Component } from 'react';
import Logo from './logo';
class Head extends Component {
    state = {}
    render() {
        return (
            <header>
                <div className="logo">
                    <Logo />
                </div>
                <div className="title"><h2>knock knock</h2></div>
                <div className="interractions"><button>Login</button></div>
            </header>
        );
    }
}

export default Head;
