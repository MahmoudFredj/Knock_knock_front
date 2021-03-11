import React, { Component } from 'react';
import Logo from './logo';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from "../../store/entities/auth";
class Head extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <Logo />
                </div>
                <div className="title"><h2>knock knock</h2></div>
                <div className="interractions">
                    {this.props.user ?
                        <React.Fragment>
                            <button><Link to="/cart">cart</Link></button>
                            <button onClick={this.props.logout}>🚪out</button>
                        </React.Fragment>
                        :
                        <button><Link to="/login">login</Link></button>
                    }
                </div>
            </header>
        );
    }
}

const mapState = (state) => ({
    user: state.auth.userInfo,
});

const mapDispatch = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapState, mapDispatch)(Head);
