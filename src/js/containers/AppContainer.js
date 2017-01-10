import React from 'react';
import {connect} from 'react-redux';
import {getRoomTitleById} from '../utils/index';
import {sortValueSelected, currentRoomIsChanged} from '../actions/index';

import Header from '../components/Header';
import PatientsListActions from '../components/PatientsListActions';
import PatientsList from '../components/PatientsList';

/**
 * A main container of the application passes necessary props and actions to the children
 */
class AppContainer extends React.Component {
    render() {
        const {currentRoomIsChanged, getRoomTitleById, sortValueSelected, currentRoom, sortValue, patients, rooms} = this.props;
        return <div>
            <Header rooms={rooms}
                    currentRoomIsChanged={currentRoomIsChanged}
                    currentRoom={currentRoom}/>

            <PatientsListActions sortValue={sortValue}
                             sortValueSelected={sortValueSelected}/>

            <div className="loader">
                <div className="loader-item"></div>
                <div className="loader-item"></div>
                <div className="loader-item"></div>
                <div className="loader-item"></div>
            </div>

            <div className="animate">
                <PatientsList patients={patients}
                              currentRoom={currentRoom}
                              sortValue={sortValue}
                              getRoomTitleById={getRoomTitleById(rooms)}/>
            </div>
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        patients: state.patients,
        rooms: state.rooms,
        currentRoom: localStorage.getItem('currentRoom') || state.viewModel.currentRoom,
        sortValue: localStorage.getItem('sortValue') || state.viewModel.sortValue
    }
};

const mapDispatchToProps = dispatch => {
    return {
        currentRoomIsChanged: roomId => {
            localStorage.setItem('currentRoom', roomId);
            dispatch(currentRoomIsChanged(roomId))
        },
        sortValueSelected: sortValue => {
            localStorage.setItem('sortValue', sortValue);
            dispatch(sortValueSelected(sortValue))
        },
        getRoomTitleById: rooms => id => getRoomTitleById(rooms, id)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
