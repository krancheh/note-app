import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://192.168.31.120:7000/api',
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token'); // token from localstorage
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const api = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
})