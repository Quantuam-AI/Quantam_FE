import { createSlice } from '@reduxjs/toolkit';

const SigninSlice = createSlice({
    name: 'signup',
    initialState: {
        formData: {
            memberId: '',
            memberPassword: '',
        },
    },
    reducers: {
        updateFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        signinSuccess: (state, action) => {
            state.formData = action.payload;
        },
    }
});

export const SigninAction = SigninSlice.actions;

export default SigninSlice;