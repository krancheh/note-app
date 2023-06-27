import {configureStore} from "@reduxjs/toolkit";
import noteListReducer from "./noteListSlice"

const store = configureStore({
    reducer: {
        notes: noteListReducer,
    },
})

export default store;