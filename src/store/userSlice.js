import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    authExtraReducers,
    checkPayloadCreator,
    loginPayloadCreator,
    signupPayloadCreator
} from "./reducers/userReducers";

export const login = createAsyncThunk('user/login', loginPayloadCreator);
export const signup = createAsyncThunk('user/signup', signupPayloadCreator);
export const check = createAsyncThunk('user/check', checkPayloadCreator);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isAuth: false,
        loginStatus: '',
        error: null,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload.user;
        },
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, authExtraReducers.fulfilled)
            .addCase(login.pending, authExtraReducers.pending)
            .addCase(login.rejected, authExtraReducers.rejected)
            .addCase(signup.fulfilled, authExtraReducers.fulfilled)
            .addCase(signup.pending, authExtraReducers.pending)
            .addCase(signup.rejected, authExtraReducers.rejected)
            .addCase(check.fulfilled, authExtraReducers.fulfilled)
            .addCase(check.pending, authExtraReducers.pending)
            .addCase(check.rejected, authExtraReducers.rejected)

    }
});


export const selectUser = (state) => state.user.user;
export const selectIsAuth = (state) => state.user.isAuth;
export const selectLoginStatus = (state) => state.user.loginStatus;
export const selectError = (state) => state.user.error;

export const {
    setUser,
    setIsAuth
} = userSlice.actions;

export default userSlice.reducer;