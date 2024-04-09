import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username:"",
  email:"",
  image:"",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserDetails: (state, action)=>{
        const updatedFields = action.payload;
        Object.keys(updatedFields).forEach(key => {
            if (state.hasOwnProperty(key)) {
              state[key] = updatedFields[key];
            }
          });
    },
    removeUser: (state)=>{
        state = initialState;
    }
  },
})

export const {  updateUserDetails, removeUser } = userSlice.actions

export default userSlice.reducer