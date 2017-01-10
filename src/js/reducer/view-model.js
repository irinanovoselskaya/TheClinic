import * as actions from "../constants/index";

const viewModel = function (state = {}, action = {}) {
    switch (action.type) {
        case actions.SET_CURRENT_ROOM:
            return {...state, currentRoom: action.roomId};
        case actions.SET_SORT_VALUE:
            return {...state, sortValue: action.sortValue};
        default:
            return state;
    }
};

export default viewModel;
