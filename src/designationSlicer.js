import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  designationList:[] ,
}

export const designationSlice = createSlice({
  name: 'designation',
  initialState,
  reducers: {
    changeDesigntionList: (state,action) => {
        state.designationList = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { changeDesignationList } = designationSlice.actions

export default designationSlice.reducer