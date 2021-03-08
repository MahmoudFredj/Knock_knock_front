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
                <div className="title">knock knock</div>
                <div className="interractions"><button>Login</button></div>
            </header>
        );
    }
}

export default Head;
