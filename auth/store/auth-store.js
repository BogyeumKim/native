import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice';

export const AuthStore = configureStore({
    reducer : {
        authReducer : authSlice
    }
});

