import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    firstName: "",
    lastName: ""
  },
  reducers: {
    setProfile: (state, action) => {
        state.firstName = action.payload.user.firstName
        state.lastName = action.payload.user.lastName
    },
    logIn: (state) => {
        state.isLoggedIn = true
    },
    logOut: (state) => {
    state.isLoggedIn = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProfile, logIn, logOut } = userSlice.actions

export default userSlice.reducer