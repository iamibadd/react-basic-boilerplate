import {combineReducers} from 'redux';
import {LOGOUT} from '../constants';
import auth from './auth';
import funds from './funds';

export const appReducers = combineReducers({auth, funds});

export const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
        localStorage.clear(); // clear localstorage
        return appReducers(undefined, action); // clear all state on logout
    }
    return appReducers(state, action);
}

