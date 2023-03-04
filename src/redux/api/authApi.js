import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cryxxen.pythonanywhere.com/users/' }),
  endpoints: (builder) => ({

    getUsers: builder.query({
      query: () => "user/",
    }),

    creatUser: builder.mutation({
      query: (userData) => ({
        url: "user/",
        method: 'POST',
        body: userData, 
      }),
    }),
  }),
})

export const {
  useGetUsersQuery,
  useCreatUserMutation,
} = authApi