import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const logInApi = createApi({
    reducerPath: 'logInApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cryxxen.pythonanywhere.com' }),
    endpoints: (builder) => ({

        getToken: builder.mutation({
            query: (data) => ({
                url: "/token/",
                method: 'POST',
                body: data,
            }),
        }),
    }),
})

export const {
    useGetTokenMutation,
} = logInApi;