import React, { Component } from 'react';
import Logo from '../structure/logo';
class DoorPanel extends Component {
    state = {}
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
                        <button style={{ float: "right" }}>add cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoorPanel;