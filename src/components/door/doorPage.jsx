import React, { Component } from 'react';
import { loadDoor, } from "../../store/entities/door";
import { loadWood, } from '../../store/entities/wood';
import { connect } from 'react-redux';
class DoorPage extends Component {
    componentDidMount() {
        this.props.loadWood();
        this.props.loadDoor();
    }
    render() {
        return (
            <div className="door-page">
                <div className="actions">
                    <div className="search">
                        <input type="text" placeholder="search ..." />
                        <button>search</button>
                    </div>
                    <button>Add</button>
                </div>
                <div className="content">
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
    loadWood: () => dispatch(loadWood())
})
export default connect(mapState, mapDispatch)(DoorPage);