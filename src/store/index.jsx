import { configureStore } from '@reduxjs/toolkit'
import SignupSlice from './SignupSlice'
import SigninSlice from './SigninSlice'

const store = configureStore({
    reducer: {
        signup: SignupSlice.reducer,
        signin: SigninSlice.reducer,
    }
})

export default store;