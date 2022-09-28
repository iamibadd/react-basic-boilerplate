import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {login} from '../../../redux/actions';

const Index = () => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = (e) => {
        const {name, value} = e.target;
        setUser((prevState) => ({...prevState, [name]: value}));
    }

    const onLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('authToken', 'authTokensajslkjakljsa');
        dispatch(login(user));
        navigate('/');
    }
    return (
        <div>
            <h6>Login here</h6>
            <form onSubmit={onLogin}>
                <input required={true} type="text" name='email' placeholder='email' onChange={onChange}/><br/>
                <input required={true} type="password" name='password' placeholder='password' onChange={onChange}/><br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Index;