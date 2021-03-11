import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import { setJWT } from "../../services/http";
import decode from "jwt-decode";
const tokenKey = 'token';
const getCurrentUser = () => {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return decode(jwt);
    } catch (e) {
        return null
    }
}
const slice = createSlice({
    name: "auth",
    initialState: {
        userInfo: null,
        error: null,
        loading: false,
    },
    reducers: {
        callBegan: (user, action) => {
            user.error = null;
            user.loading = true;
        },
        callFailed: (user, action) => {
            user.error = action.payload;
            user.loading = false;
        },
        userLogin: (user, action) => {
            const jwt = action.payload;
            setJWT(jwt);
            localStorage.setItem(tokenKey, jwt);
            user.userInfo = decode(jwt);
            user.loading = false;
        },
        userLoaded: (user, action) => {
            const jwt = localStorage.getItem(tokenKey);
            user.userInfo = getCurrentUser();
            setJWT(jwt);
        },
        userLogout: (user, action) => {
            localStorage.removeItem(tokenKey);
            user.userInfo = null;
        },
    }
});

export default slice.reducer;
const actions = slice.actions;

export const login = (user) => apiCallBegan({
    url: 'login',
    method: 'post',
    data: user,
    onStart: actions.callBegan.type,
    onSuccess: actions.userLogin.type,
    onError: actions.callFailed.type,
});

export const logout = () => actions.userLogout();

export const register = (user) => apiCallBegan({
    url: 'register',
    method: 'post',
    data: user,
    onStart: actions.callBegan.type,
    onSuccess: actions.userLogin.type,
    onError: actions.callFailed.type,
});


export const loadUser = () => actions.userLoaded();