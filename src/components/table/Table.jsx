import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux';

const columns = [
  { field: 'first_name', headerName: 'First name', width: 130 },
  { field: 'last_name', headerName: 'Last name', width: 130 },
  {
    field: 'join_date',
    headerName: 'Join Date',
    // type: 'number',
    width: 90,
  },
  {
    field: 'date_of_birth',
    headerName: 'Date of Birth',
    width: 160,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 90,
  },
  {
    field: 'designation_id',
    headerName: 'Designation',
    width: 90,
  }
];
function Table() {
  const employees = useSelector(state => state.employee.employeeList)
  let rows = employees
  return (
    <div>
      <div sx={{mx:5}} style={{ height: 400, width: '100%' }}>
        
          <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
        />
      
    </div>
    </div>
  )
}

export default Table