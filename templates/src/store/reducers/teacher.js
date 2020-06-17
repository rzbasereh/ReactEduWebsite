import * as actionType from './../actions/actionTypes';

const initialTeacherState = {
    loading: false,
    data: [],
    error: "",
    message: []
};


const teacherReducer = (state = initialTeacherState, action) => {
    switch (action.type) {
        case actionType.GET_QUESTION:
            return {
                ...state,
                data: {
                    questions: action.data,
                    count: action.count
                }
            };

        default:
            return state;
    }
};

export default teacherReducer;