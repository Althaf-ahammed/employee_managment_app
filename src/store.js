import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './ReactSlicer'
import registerReducer from './RegisterSlicer'
import employeeReducer from './EmployeeSlicer'
import designationSlicer from './designationSlicer'

export const store = configureStore({
  reducer: {
    login:loginReducer,
    register:registerReducer ,
    employee:employeeReducer ,
    designation:designationSlicer
  },
})