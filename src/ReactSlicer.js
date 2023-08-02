import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '' ,
  password: '' ,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeEmail: (state,action) => {
        state.email = action.payload
      },
    changePassword:(state,action) =>{
        state.password = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeEmail,changePassword } = loginSlice.actions

export default loginSlice.reducer