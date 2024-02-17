import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState: {
        token : '',
        isAuthenticated : false,
    },
    reducers : {
        authenticateLogin : (state,action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logout : (state,action) => {
            state.token ='';
            state.isAuthenticated = false;
        }
    }
});

export const {authenticateLogin,logout} =  authSlice.actions;
export default authSlice.reducer;