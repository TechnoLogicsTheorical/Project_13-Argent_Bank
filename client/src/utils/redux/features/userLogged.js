import { createSlice } from '@reduxjs/toolkit';

const UserLoggedSlice = createSlice({
    name: 'userLogged',
    initialState: {
        isLogged: false
    },
    reducers: {
        loggedIn: (state) => {
            state.isLogged = true;
        },
        logOut: (state) => {
            state.isLogged = false;
        }
    }
});

export const { loggedIn, logOut } = UserLoggedSlice.actions;
export default UserLoggedSlice.reducer;