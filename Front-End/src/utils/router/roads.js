import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../../Pages/RootLayout.jsx';

export const roads = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: ''
            }
        ]
    }
])