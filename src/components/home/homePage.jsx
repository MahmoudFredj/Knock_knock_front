import React, { Component } from 'react';
import Head from '../structure/head';
import MainMenu from '../structure/mainMenu';
import DoorPage from '../door/doorPage';
import Foot from '../structure/foot';
import { connect } from "react-redux";
import { loadUser } from "../../store/entities/auth";
class HomePage extends Component {
    componentDidMount() {
        this.props.loadUser();
    }
    render() {
        return (
            <div className="app-wrapper">
                <Head />
                <MainMenu />
                <main>
                    <DoorPage />
                </main>
                <Foot />
            </div>
        );
    }
}

const mapDispatch = (dispatch) => ({
    loadUser: () => dispatch(loadUser()),
});

export default connect(null, mapDispatch)(HomePage);