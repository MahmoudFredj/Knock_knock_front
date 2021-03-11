import React, { Component } from 'react';
import { Link } from 'react-router-dom/';
import Joi from 'joi';
import Form from '../util/form';
import { register } from "../../store/entities/auth";
import { connect } from "react-redux";
class Register extends Component {
    getSchema = () => {
        return Joi.object({
            email: Joi.string().required(),
            password: Joi.string().min(6).max(10).required(),
            name: Joi.string().min(3).max(50).required(),
            phoneNumber: Joi.number(),
        });
    }
    handleConfirm = async (form) => {
        const user = {
            pseudo: form.email,
            password: form.password,
            name: form.name,
            phoneNumber: form.phoneNumber,
        };

        console.log(user);
        await this.props.register(user);
        if (!this.props.error) this.props.history.push('/');
    }

    render() {
        return (
            <div className="register-page">
                <div className="login-panel">
                    <Form
                        schema={this.getSchema}
                        name="Register"
                        warning={this.props.error}
                        onConfirm={this.handleConfirm}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatch = (dispatch) => ({
    register: (user) => dispatch(register(user)),
});

const mapState = (state) => ({
    error: state.auth.error,
});
export default connect(mapState, mapDispatch)(Register);