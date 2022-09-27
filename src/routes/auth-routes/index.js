import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {APP_PREFIX_PATH, AUTH_PREFIX_PATH} from "../../config/app-config";

const Login = lazy(() => import( '../../components/auth/login'));
const PageNotFound = lazy(() => import( '../../components/utils/page-404'));

const routes = [
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '*',
        element: <PageNotFound/>
    },
    {
        path: '/',
        element: <Navigate to={`${AUTH_PREFIX_PATH}/login`} replace={true}/>
    },
];

const setRoutes = () => routes?.map(({path, element}) => <Route key={path} path={path} element={element}/>);

const redirectToDashboard = () => <Route path={'*'} element={<Navigate to={APP_PREFIX_PATH} replace={true}/>}/>

const AuthRoutes = ({isAuthenticated}) => {
    return (
        <Suspense>
            <Routes>
                {!isAuthenticated ? setRoutes() : redirectToDashboard()}
            </Routes>
        </Suspense>
    );
};

export default AuthRoutes;