import AuthService from "../../services/AuthService";
import jwtDecode from "jwt-decode";


export const loginPayloadCreator = async ({username, password}, {rejectWithValue}) => {
    try {
        const {data} = await AuthService.login(username, password);
        return {
            token: data.token,
            user: jwtDecode(data.token),
        };
    } catch (error) {
        return rejectWithValue({errorMessage: error.message});
    }
}

export const signupPayloadCreator = async ({username, email, password}, {rejectWithValue}) => {
    try {
        const {data} = await AuthService.signup(username, email, password);
        return {
            token: data.token,
            user: jwtDecode(data.token),
        };
    } catch (error) {
        return rejectWithValue({errorMessage: error.message});
    }
}

export const checkPayloadCreator = async (_, {rejectWithValue}) => {
    try {
        const {data} = await AuthService.check();
        return {
            token: data.token,
            user: jwtDecode(data.token),
        };
    } catch (error) {
        return rejectWithValue({errorMessage: error.message});
    }
}

export const authExtraReducers = {
    fulfilled: (state, action) => {
        state.loginStatus = 'resolved';
        state.isAuth = true;
        state.user = action.payload.user;
        localStorage.setItem('token', action.payload.token);
    },
    pending: (state) => {
        state.loginStatus = 'pending';
        state.isAuth = false;
    },
    rejected: (state, action) => {
        state.loginStatus = 'rejected';
        state.isAuth = false;
        state.error = action.payload.errorMessage;
    }
}