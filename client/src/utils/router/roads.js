import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../../Pages/RootLayout.jsx';
import Home from '../../Pages/Home.jsx';
import Login from '../../Pages/Login.jsx';
import Profile from '../../Pages/Profile.jsx';

export const roads = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    }
])