import {SET_FUNDS} from '../constants';

export const setFunds = (payload) => {
    return {
        type: SET_FUNDS,
        payload
    }
};

