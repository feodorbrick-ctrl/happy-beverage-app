import React from 'react';
import {router} from '../router/router';
import {Navigate, Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {router.map(route =>
                    <Route path={route.path} key={route.name} element={route.component} />
                )}
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </div>
    );
};

export default AppRouter;