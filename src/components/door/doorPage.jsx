import React, { Component } from 'react';
import { loadDoor, } from "../../store/entities/door";
import { connect } from 'react-redux';
import AddDoorPanel from './addDoorPanel';
import DoorPanel from './doorPanel';
import Input from '../util/input';
class DoorPage extends Component {
    state = {
        addDoorPanel: false,
    }
    componentDidMount() {
        this.props.loadDoor();
    }


    render() {
        return (
            <div className="door-page">
                {this.state.addDoorPanel &&
                    <AddDoorPanel onClose={() => { this.setState({ addDoorPanel: false }); }} />
                }
                <div className="actions">
                    <div className="search" >
                        <div className="input-container" style={{ display: "inline" }}>
                            <input type="text" placeholder="search..." style={{ display: "inline", width: "auto" }} />
                        </div>
                    </div>
                    <button onClick={() => { this.setState({ addDoorPanel: true }) }}>Add</button>
                </div>
                <div className="content">
                    {this.props.doors.map(door => <DoorPanel key={door.id} door={door} />)}
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    doors: state.door.list,
    loading: state.door.loading || state.wood.loading,
    error: state.door.error || state.wood.error,
});

const mapDispatch = (dispatch) => ({
    loadDoor: () => dispatch(loadDoor()),
})
export default connect(mapState, mapDispatch)(DoorPage);