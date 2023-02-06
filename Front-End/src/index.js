import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import { roads } from './utils/router/roads.js';
import { Store } from './utils/redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <RouterProvider router={roads} />
        </Provider>
    </React.StrictMode>
);
