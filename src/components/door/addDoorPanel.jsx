import React, { Component } from 'react';
import Dialg from '../util/dialg';
class AddDoorPanel extends Component {
    state = {}

    handleConfirm = () => {
        console.log();
    }
    render() {
        return (
            <Dialg
                head="Add Door"
                onCancel={this.props.onCancel}
                onConfirm={this.props.onConfirm}
            >

            </Dialg>
        );
    }
}

export default AddDoorPanel;