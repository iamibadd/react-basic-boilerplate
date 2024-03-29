import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {login} from '../../../redux/actions';
import styles from './styles.module.css';

const Login = () => {
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
            <h1 className={styles.title}>Login here</h1>
            <form onSubmit={onLogin}>
                <input required={true} type="text" name='email' placeholder='email' onChange={onChange}/><br/>
                <input required={true} type="password" name='password' placeholder='password' onChange={onChange}/><br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;