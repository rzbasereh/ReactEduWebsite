import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: user
    }
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
};

export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/api/auth/', {
            email: email,
            password: password
        })
            .then(res => {
                console.log(res.data);
                const token = res.data.token;
                const user = res.data.user;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token, user));
                dispatch(checkAuthTimeout(3600))
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
};
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                let user = "";
                axios.get('http://127.0.0.1:8000/api/auth_type/', {headers: {Authorization: "Token " + token}})
                    .then(res => {
                        user = res.data.user;
                        dispatch(authSuccess(token, user));
                        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
                        console.log("type ",user);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
};