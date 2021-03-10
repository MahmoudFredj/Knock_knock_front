import React, { Component } from 'react';
import Form from '../util/form';
import Joi from 'joi';
import { addDoor } from "../../store/entities/door";
import { loadWood } from "../../store/entities/wood";
import { connect } from 'react-redux';
class AddDoorPanel extends Component {
    state = {
        wood: -1,
        woodError: null
    }
    componentDidMount() {
        this.props.loadWood();
    }
    getSchema = () => {
        const schema = Joi.object({
            name: Joi.string().min(3).max(50).required(),
            description: Joi.string().min(10).max(512).required(),
            quantity: Joi.number().required(),
            width: Joi.number().required(),
            height: Joi.number().required(),
            price: Joi.number().required()
        });
        return schema;
    }

    handleConfirm = (form) => {
        // dealing with wood property
        if (this.state.wood < 0) {
            this.setState({ woodError: "please pick wood type" });
            return;
        }
        form.wood = {
            id: this.state.wood,
        };
        // everything clear executing addDoor dispatch
        this.props.addDoor(form);
        this.props.onClose();
    }
    handleWood = (select) => {
        const wood = select.target.value;
        this.setState({ wood });
    }
    render() {
        return (
            <React.Fragment>
                <div className="dialog-background" onClick={this.props.onClose}></div>
                <div className="dialog">
                    <Form
                        schema={this.getSchema}
                        name="Add Door"
                        warning={this.props.error}
                        onConfirm={this.handleConfirm}
                        onCancel={this.props.onClose}
                    >
                        <div className="input-container">
                            <select name="wood" onChange={this.handleWood} defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled hidden>Choose Wood type</option>
                                {this.props.woods.map(wood => <option key={wood.id} value={wood.id}>{wood.name}</option>)}
                            </select>
                            {this.state.woodError && <span>{this.state.woodError}</span>}
                        </div>
                        <div></div>
                    </Form>
                    <div className="danger">{this.props.error}</div>
                </div>
            </React.Fragment>
        );
    }
}

const mapState = (state) => ({
    woods: state.wood.list,
    loading: state.wood.loading,
});

const mapDispatch = (dispatch) => ({
    addDoor: (door) => dispatch(addDoor(door)),
    loadWood: () => dispatch(loadWood()),
});
export default connect(mapState, mapDispatch)(AddDoorPanel);