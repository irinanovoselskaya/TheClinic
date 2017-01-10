import React from 'react';
import {connect} from 'react-redux';

import {patientRoomChanged} from '../actions/index';
import PatientActions from '../components/PatientActions';

/**
 * Passes necessary data to PatientActions component
 */
class PatientActionsContainer extends React.Component {
    render() {
        const {patientRoomChanged, patient, rooms} = this.props;
        return <PatientActions rooms={rooms}
                               patientId={patient.id}
                               patientRoomChanged={patientRoomChanged(patient)}/>;
    }
}

const mapStateToProps = state => {
    return {rooms: state.rooms}
};

const mapDispatchToProps = dispatch => {
    return {patientRoomChanged: patient => roomId => dispatch(patientRoomChanged(patient, roomId))};
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientActionsContainer);
