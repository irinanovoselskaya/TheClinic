import React from 'react';
import {Col} from 'react-bootstrap';

import PatientActionsContainer from'../containers/PatientActionsContainer';

/**
 * Renders a patient info
 */
class PatientItem extends React.Component {
    render() {
        const {getRoomTitleById, patient} = this.props;
        const roomTitle = getRoomTitleById(patient.roomId);
        const role = patient.role
            ? <p className="info-line"><strong>Role: </strong>{patient.role}</p>
            : null;

        return <Col lg={3} md={4} sm={6} xs={12}>
            <div className="patient-item">
                <PatientActionsContainer patient={patient}/>

                <h2 className="patient-name">
                    {patient.name}
                    <small>{patient.dataOfBirthday}</small>
                </h2>
                <p className="info-line"><strong>Day of Entry: </strong>{patient.dayOfEntry}</p>
                <p className="info-line"><strong>Room: </strong>{roomTitle}</p>
                {role}
            </div>
        </Col>;
    }
}

export default PatientItem;
