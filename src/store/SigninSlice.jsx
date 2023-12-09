import { createSlice } from '@reduxjs/toolkit';

const SigninSlice = createSlice({
    name: 'signin',
    initialState: {
        memberId: '',
        memberPassword: '',
        isLoggedIn: false,
    },
    reducers: {
        updateMemberId: (state, action) => {
            state.memberId = action.payload;
        },
        updateMemberPassword: (state, action) => {
            state.memberPassword = action.payload;
        },
        signinSuccess: (state) => {
            state.isLoggedIn = true; 
            console.log(state.isLoggedIn);
        },
        signout: (state) => {
            state.isLoggedIn = false; // 추가
        },
    }
});

export const SigninAction = SigninSlice.actions;

export default SigninSlice;