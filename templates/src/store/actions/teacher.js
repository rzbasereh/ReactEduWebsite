import * as actionType from './actionTypes';
import axios from 'axios';

export const getQuestion = (data, count) => {
    return {
        type: actionType.GET_QUESTION,
        data: data,
        count: count
    };
};
export const updatePack = (count , pack_pk) => {
    return {
        type: actionType.UPDATE_PACK,
        count: count,
        pack_pk: pack_pk
    };
};


export const getQuestionApi = (minValue, maxValue) => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const post_data = {
            requestType: "pagination",
            start: minValue,
            stop: maxValue
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
export const updatePackApi = (id , state) => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const post_data = {
            pk: id,
            state: state
        };
        axios.post("http://127.0.0.1:8000/api/teacher/questions/selected", post_data, {headers: {Authorization: "Token " + token}})
            .then(res => {
                console.log(res.data);
                dispatch(updatePack(res.data.count , res.data.pack_pk));
            })
            .catch(err => {
                console.log(err);
            });
    }
};