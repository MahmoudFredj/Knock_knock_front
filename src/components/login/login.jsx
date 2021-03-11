import React, { Component } from 'react';
import { Link } from 'react-router-dom/';
import Joi from 'joi';
import Form from '../util/form';
import { connect } from 'react-redux';
import { login } from "../../store/entities/auth";
class Login extends Component {

    getSchema = () => {
        return Joi.object({
            email: Joi.string(),
            password: Joi.string(),
        });
    }

    handleConfirm = async (form) => {
        const user = {
            pseudo: form.email,
            password: form.password,
        };
        await this.props.login(user);
        if (!this.props.error)
            this.props.history.push('/');
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-panel">
                    <Form
                        schema={this.getSchema}
                        name="Login"
                        warning={this.props.error}
                        onConfirm={this.handleConfirm}
                    >
                        <Link to="/register">Register</Link>
                    </Form>
                </div>
            </div>
        );
    }
}



const mapState = (state) => ({
    error: state.auth.error,
});
const mapDispatch = (dispatch) => ({
    login: (user) => dispatch(login(user)),
});
export default connect(mapState, mapDispatch)(Login);