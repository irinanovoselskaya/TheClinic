import React from 'react';
import {Grid, Row} from 'react-bootstrap';

import PatientItem from './PatientItem';

/**
 * Renders a list of patients
 */
class PatientsList extends React.Component {
    render() {
        const {patients, sortValue} = this.props;
        const patientsSortedList = patients.sort(function(a,b){
            if (sortValue === 'name') {
                return a[sortValue] > b[sortValue];
            } else {
                return new Date(a[sortValue]) > new Date(b[sortValue]);
            }
        });
        const patientsList = patientsSortedList.map(patient => {
            const {getRoomTitleById, currentRoom} = this.props;

            if (currentRoom == 0) {
                return <PatientItem key={patient.id}
                                 patient={patient}
                                 getRoomTitleById={getRoomTitleById}/>
            } else {
                return (patient.roomId == currentRoom
                    ? <PatientItem key={patient.id}
                                   patient={patient}
                                   getRoomTitleById={getRoomTitleById}/>
                    : null);
            }
        });

        return <Grid>
            <Row>
                {patientsList}
            </Row>
        </Grid>;
    }
}

export default PatientsList;
