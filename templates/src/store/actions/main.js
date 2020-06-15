import * as actionType from './actionTypes';
import axios from 'axios';

export const commonData = (full_name, avatar, has_message, has_notification) => {
    return {
        type: actionType.COMMON_DATA,
        full_name: full_name,
        avatar: avatar,
        has_message: has_message,
        has_notification: has_notification,
    }
};


export const collectCommonData = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        axios.get('http://127.0.0.1:8000/api/common_data/', {headers: {Authorization: "Token " + token}})
            .then(res => {
                // console.log(res.data);
                dispatch(commonData(res.data.full_name, "", res.data.has_message, res.data.has_notification));
            })
            .catch(err => {
                console.log(err);
            });
    }
};