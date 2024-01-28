import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.token = action.payload;
        },
        signup: (state, action) => {
            state.user = action.payload;
            state.token = action.payload;
        },
        logout: (state, _) => {
            state.user = null;
            state.token = null;
            localStorage.clear();
        },
    },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
