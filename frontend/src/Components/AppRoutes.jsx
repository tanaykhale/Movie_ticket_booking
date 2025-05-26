import React from 'react'
import { Suspense } from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Login from './Login';
const AppRoutes = createBrowserRouter([
    {
        path:'/',
        element:(
            <Suspense fallback={<h1>Loading...</h1>}>
                <Login></Login>
            </Suspense>
        )
    }
]);

export default AppRoutes
