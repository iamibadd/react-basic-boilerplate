import {SET_FUNDS} from '../constants';

const initState = {
    data: [],
}

const funds = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_FUNDS:
            return {
                ...state,
                data: payload
            };
        default:
            return state;
    }
}

export default funds;
