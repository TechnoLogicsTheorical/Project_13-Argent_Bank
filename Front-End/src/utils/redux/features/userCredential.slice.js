import { createSlice } from '@reduxjs/toolkit';

const UserCredentialSlice = createSlice({
    name: 'userCredential',
    initialState: {
        token: null,

        firstName: null,
        lastName: null,
    },
    reducers: {
        setUserCredential: (state, { payload }) => {
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
        },
        setToken: (state, { payload }) => {
            state.token = payload.token;
        },
        resetCredential: (state) => {
            state.firstName = null;
            state.lastName = null;
            state.token = null;
        }
    }
});

export const { setUserCredential, setToken, resetCredential } = UserCredentialSlice.actions;
export default UserCredentialSlice.reducer;