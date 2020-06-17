import * as actionType from './actionTypes';
import axios from 'axios';

export const getQuestion = (data, questions) => {
    return {
        type: actionType.GET_QUESTION,
        data: data,
        questions: questions
    };
};


export const getQuestionApi = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const post_data = {
            requestType: "pagination"
        };
        axios.post("http://127.0.0.1:8000/api/teacher/questions/get_page", post_data, {headers: {Authorization: "Token " + token}})
            .then(res => {
                console.log(res.data.questions);
                dispatch(getQuestion(res.data.questions, res.data.count));
            })
            .catch(err => {
                console.log(err);
            });
    }
};