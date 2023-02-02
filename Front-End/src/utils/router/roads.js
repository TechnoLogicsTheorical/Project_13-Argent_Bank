import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../../Pages/RootLayout.jsx';
import Home from '../../Pages/Home.jsx';

export const roads = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])