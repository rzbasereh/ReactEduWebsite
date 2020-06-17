import * as actionType from './../actions/actionTypes';

const initialTeacherState = {
    loading: false,
    data: [],
    questions: 0,
    error: "",
    message: []
};


const teacherReducer = (state = initialTeacherState, action) => {
    switch (action.type) {
        case actionType.GET_QUESTION:
            return {
                ...state,
                data: action.data,
                questions: action.questions
            };

        default:
            return state;
    }
};

export default teacherReducer;