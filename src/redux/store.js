import { configureStore } from '@reduxjs/toolkit'
import { authApi } from "./api/authApi"
import { logInApi } from './api/loginApi'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [logInApi.reducerPath]: logInApi.reducer,
  },
})