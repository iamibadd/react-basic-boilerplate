import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {APP_PREFIX_PATH, AUTH_PREFIX_PATH} from "../../config/app-config";

const Dashboard = lazy(() => import( '../../views/app/dashboard'));
const PageNotFound = lazy(() => import( '../../components/util-components/page-404'));

const routes = [
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '*',
        element: <PageNotFound/>
    },
    {
        path: '/',
        element: <Navigate to={`${APP_PREFIX_PATH}/dashboard`} replace={true}/>
    },
];

const setRoutes = () => routes?.map(({path, element}) => <Route key={path} path={path} element={element}/>);

const redirectToLogin = () => <Route path={'*'} element={<Navigate to={AUTH_PREFIX_PATH} replace={true}/>}/>

const AppRoutes = ({isAuthenticated}) => {
    return (
        <Suspense>
            <Routes>
                {isAuthenticated ? setRoutes() : redirectToLogin()}
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;