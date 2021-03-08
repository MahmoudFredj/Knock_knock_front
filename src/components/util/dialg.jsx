import React, { Component } from 'react';
class Dialg extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="dialog-background" onClick={this.props.onCancel}></div>
                <div className="dialog">
                    <div className="head">
                        {this.props.title}
                    </div>
                    <div className="content">
                        {this.props.children}
                    </div>
                    <div className="foot">
                        <button className="danger" onClick={this.props.onCancel}>cancel</button>
                        <button className="success" onClick={this.props.onConfirm}>confirm</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dialg;