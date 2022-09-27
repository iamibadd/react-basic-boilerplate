import {LOGIN} from '../constants';

const initState = {
    user: {},
    token: '',
}
console.log(initState.token);

const auth = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                token: localStorage.getItem('authToken')
            };
        default:
            return state;
    }
}

export default auth;
