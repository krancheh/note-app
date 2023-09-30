import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice"
import userReducer from "../features/user/userSlice";
import {api} from "../api/api";

const store = configureStore({
    reducer: {
        notes: notesReducer,
        user: userReducer,
        [api.reducerPath]: api.reducer,
    },
    // this middleware needed for caching I guess ???
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    devTools: true,
})

export default store;