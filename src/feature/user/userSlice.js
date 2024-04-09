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
        console.log(state)
        const updatedFields = action.payload;
        Object.keys(updatedFields).forEach(key => {
            console.log(key)
            if (state.hasOwnProperty(key)) {
                console.log(state[key], updatedFields[key])
              state[key] = updatedFields[key];
            }
          });
        console.log(state)
    },
    removeUser: (state)=>{
        state = initialState;
    }
  },
})

export const {  updateUserDetails, removeUser } = userSlice.actions

export default userSlice.reducer