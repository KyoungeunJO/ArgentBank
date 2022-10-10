import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Reducers/userSlice.js'

export default configureStore({
  reducer: {
    user: userSlice
  },
})