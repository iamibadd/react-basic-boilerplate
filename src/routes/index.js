import React from 'react';
import {useSelector} from "react-redux";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AuthRoutes from "./auth-routes";
import AppRoutes from "./app-routes";
import {APP_PREFIX_PATH, AUTH_PREFIX_PATH} from "../config/app-config";

const AllRoutes = () => {
    const {token} = useSelector(state => state.auth);
    const isAuthenticated = token ? `${APP_PREFIX_PATH}/dashboard` : `${AUTH_PREFIX_PATH}/login`;
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${AUTH_PREFIX_PATH}/*`} element={<AuthRoutes isAuthenticated={token}/>}/>
                <Route path={`${APP_PREFIX_PATH}/*`} element={<AppRoutes isAuthenticated={token}/>}/>
                <Route exact={true} path='/' element={<Navigate to={isAuthenticated} replace={true}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AllRoutes;