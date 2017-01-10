import * as actions from "../constants/index";

const patients = function (state = {}, action = {}) {
    switch (action.type) {
        case actions.SET_PATIENT_ROOM_ID:
            return state.map(patient => {
                return patient.id == action.patient.id
                    ? {...patient, roomId: action.roomId}
                    : patient;
            });
        default:
            return state;
    }
};

export default patients;
