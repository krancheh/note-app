import {api} from "../../api/api";

export const userAPI = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation({
            query: credentials => ({
                url: '/user/login',
                method: 'POST',
                body: credentials,
            })
        }),
        signup: build.mutation({
            query: credentials => ({
                url: '/user/signup',
                method: 'POST',
                body: credentials,
            })
        }),
        checkAuth: build.mutation({
            query: () => ({
                url: '/user/auth',
                method: 'GET',
            }),
            invalidatesTags: ['Notes']
        })
    })
})

export const {useLoginMutation, useSignupMutation, useCheckAuthMutation} = userAPI;