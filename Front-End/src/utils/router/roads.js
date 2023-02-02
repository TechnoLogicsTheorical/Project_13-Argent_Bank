import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../../Pages/RootLayout.jsx';
import Home from '../../Pages/Home.jsx';
import SignIn from '../../Pages/SignIn.jsx';
import UserAccount from '../../Pages/UserAccount.jsx';

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
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/user',
                element: <UserAccount />
            }
        ]
    }
])