import React, { useEffect, useState } from 'react'
import Table from '../../components/table/Table'
import { Box, Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
import {changeEmployeeList} from '../../EmployeeSlicer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Employee() {
    const employees = useSelector(state => state.employee.employeeList)
    const accessToken = localStorage.getItem('token')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authAxios = axios.create({
        baseURL:'http://training.pixbit.in/api',
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    })
    useEffect(() => {
        async function fetchData(){
            try{
                const response = await authAxios.get('/employees')
                dispatch(changeEmployeeList(response.data.data.data))
                console.log(response);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData()
    }, [])
    const handleClick = (e)=>{
        e.preventDefault()
        navigate('/employee/addEmployee')
    }
  return (
    <div>
        <Box>
        <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <Typography variant="h5">
                Employee List
            </Typography>
            <Button onClick={handleClick} >Add Employee</Button>
    </Grid>   
        </Box>
        <Table/>
    </div>
  )
}

export default Employee