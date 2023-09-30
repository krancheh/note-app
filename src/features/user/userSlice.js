import {createSlice} from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            username: '',
        },
        token: null,
    },
    reducers: {
        setCredentials(state, action) {
            const {token} = action.payload;
            const {id, username} = jwtDecode(token);
            state.user = {id, username};
            state.token = token;
        },
        logOut(state) {
            state.user = null;
            state.user = null;
        }
    },

});


export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;

export const {
    setCredentials,
    logOut
} = userSlice.actions;
export default userSlice.reducer;