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
        }
    }
});

export const { setUserCredential, setToken } = UserCredentialSlice.actions;
export default UserCredentialSlice.reducer;