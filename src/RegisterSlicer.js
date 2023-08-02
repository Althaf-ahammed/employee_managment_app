import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '' ,
  password: '' ,
  password_confirmation: '' ,
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    changeEmail: (state,action) => {
        state.email = action.payload
      },
    changePassword:(state,action) =>{
        state.password = action.payload
    },
    changeName: (state,action) =>{
        state.name = action.payload
    },
    changepasswordConfirmation:(state,action) =>{
        state.password_confirmation = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeEmail,changePassword,changeName,changepasswordConfirmation } = registerSlice.actions

export default registerSlice.reducer