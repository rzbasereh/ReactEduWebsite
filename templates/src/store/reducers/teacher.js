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
        case actionType.UPDATE_PACK:
            return {
                ...state,
                data: {
                   ...state.data,
                    selectedQuestion: action.count,
                    pack_pk: action.pack_pk,
                }
            };
        default:
            return state;
    }
};

export default teacherReducer;