import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/authSlice.js"


export default configureStore({
  reducer: {
    auth: authReducer
  }
})