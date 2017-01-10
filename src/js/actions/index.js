import * as types from '../constants/index';

export const currentRoomIsChanged = roomId => ({type: types.SET_CURRENT_ROOM, roomId});

export const sortValueSelected = sortValue => ({type: types.SET_SORT_VALUE, sortValue});

export const patientRoomChanged = (patient, roomId) => ({type: types.SET_PATIENT_ROOM_ID, patient, roomId});
