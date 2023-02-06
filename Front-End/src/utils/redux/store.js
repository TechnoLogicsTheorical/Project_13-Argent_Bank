import { configureStore } from '@reduxjs/toolkit';
import UserCredentialReducer from './features/userCredential.slice.js';
import UserLoggedReducer from './features/userLogged.js';

export const Store = configureStore({
    reducer: {
        userLogged: UserLoggedReducer,
        userCredential: UserCredentialReducer,
    }
});

