import React from 'react'
import { Suspense } from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Login from './Login';
import Home from './Home'
const AppRoutes = createBrowserRouter([
    {
        path:'/',
        element:(
            <Suspense fallback={<h1>Loading...</h1>}>
                <Login></Login>
            </Suspense>
        ),
        
    },{
        path:'/home',
        element:(
            <Suspense fallback={<h1>Loading...</h1>}>
                <Home></Home>
            </Suspense>
        )
    }
]);

export default AppRoutes
