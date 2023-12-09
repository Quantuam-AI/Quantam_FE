import { createSlice } from '@reduxjs/toolkit';

const SigninSlice = createSlice({
    name: 'signin',
    initialState: {
        memberId: '',
        memberPassword: '',
        isLoggedIn: false,
        id: '',
    },
    reducers: {
        updateMemberId: (state, action) => {
            state.memberId = action.payload;
        },
        updateMemberPassword: (state, action) => {
            state.memberPassword = action.payload;
        },
        signinSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.id = action.payload;
        },
        signout: (state) => {
            state.isLoggedIn = false; // 추가
            state.id = '';
        },
    }
});

export const SigninAction = SigninSlice.actions;

export default SigninSlice;