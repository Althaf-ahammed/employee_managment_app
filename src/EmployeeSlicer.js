import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employeeList:[] ,
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    changeEmployeeList: (state,action) => {
        state.employeeList = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { changeEmployeeList } = employeeSlice.actions

export default employeeSlice.reducer