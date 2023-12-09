import { createSlice } from '@reduxjs/toolkit';

const SignupSlice = createSlice({
    name: 'signup',
    initialState: {
        formData: {
            memberId: '',
            memberPassword: '',
            memberName: '',
            memberMail: '',
        },
    },
    reducers: {
        updateFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        signupSuccess: (state, action) => {
            state.formData = action.payload;
        },
    }
});

export const SignupAction = SignupSlice.actions;

export default SignupSlice;