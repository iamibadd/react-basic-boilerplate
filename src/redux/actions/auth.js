import {LOGIN, LOGOUT} from '../constants';

export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    }
};

