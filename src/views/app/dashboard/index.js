import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logout} from '../../../redux/actions';
import {useNavigate} from "react-router-dom";

const Index = () => {
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogout = () => {
        dispatch(logout());
        navigate('/');
    }
    return (
        <div>
            <h1>Hello to the team {user.email}!</h1>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Index;