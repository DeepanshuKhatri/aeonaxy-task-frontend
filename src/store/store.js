// import counterReducer from '../feature/userSlice'
import userReducer from '../feature/user/userSlice'
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})