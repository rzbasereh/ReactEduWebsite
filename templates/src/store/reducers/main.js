import * as actionTypes from '../actions/actionTypes'

const initialMainState = {
    loadPage: false,
    full_name: "",
    avatar: "",
    has_message: false,
    message: [],
    has_notification: false,
    notification: [],
    data: [],
    error: ""
};


const mainReducer = (state = initialMainState, action) => {
    switch (action.type) {
        case actionTypes.COMMON_DATA:
            return {
                ...state,
                full_name: action.full_name,
                avatar: action.avatar,
                has_message: action.has_message,
                has_notification: action.has_notification
            };

        default:
            return state;
    }
};

export default mainReducer;