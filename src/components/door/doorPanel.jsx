import React, { Component } from 'react';
import Logo from '../structure/logo';
import { removeDoor } from "../../store/entities/door";
import { connect } from "react-redux";
class DoorPanel extends Component {
    handleDelete = () => {
        console.log("delete id:", this.props.door.id);
        const ok = window.confirm("would you like to delete this?");

        if (ok) this.props.removeDoor(this.props.door);
    }

    handleAddCart = () => {
        let qte;
        qte = 20;
        console.log(qte);
    }
    render() {
        return (
            <div className="door-panel">
                <div className="picture logo">
                    <Logo />
                </div>

                <div className="content">
                    <div className="name">
                        <label>Name:</label>{this.props.door.name}
                    </div>
                    <div className="description">
                        <label>Description:</label>
                        <article>{this.props.door.description}</article>
                    </div>
                    <div className="quantity">
                        <label>quantity:</label>{this.props.door.quantity}
                    </div>
                    <div className="width">
                        <label>width:</label>{this.props.door.width} meter
                    </div>
                    <div className="height">
                        <label>height:</label>{this.props.door.height} meter
                    </div>
                    <div className="price">
                        <label>price:</label>{this.props.door.price} usd
                        {this.props.user && this.props.user.role == "admin" &&
                            <button className="danger" style={{ float: "right" }} onClick={this.handleDelete}>delete</button>}
                        {this.props.user && <button style={{ float: "right" }}>add cart</button>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    user: state.auth.userInfo,
});

const mapDispatch = (dispatch) => ({
    removeDoor: (id) => dispatch(removeDoor(id)),
});

export default connect(mapState, mapDispatch)(DoorPanel);