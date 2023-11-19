import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    }
});

export const AuthAction = AuthSlice.actions;

export default AuthSlice;