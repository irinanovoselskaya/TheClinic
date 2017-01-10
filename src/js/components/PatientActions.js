import React from 'react';
import {Glyphicon, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

/**
 * Renders actions for each patient
 */
class PatientActions extends React.Component {
    render() {
        const {patientRoomChanged, patientId, rooms} = this.props;
        const toggleButtonTitle = <Glyphicon glyph="option-vertical"/>;
        const menuID = `menu-${patientId}`;
        const listOfRooms = rooms.map(room => {
            return <MenuItem key={room.id} onClick={() => patientRoomChanged(room.id)}>{room.title}</MenuItem>;
        });
        return <ButtonToolbar>
            <DropdownButton bsStyle="default"
                            title={toggleButtonTitle}
                            noCaret
                            id={menuID}>
                <MenuItem header>Move to room...</MenuItem>
                {listOfRooms}
            </DropdownButton>
        </ButtonToolbar>
    }
}

export default PatientActions;
