import React, { useEffect } from 'react'
import Table from '../../components/table/Table'
import { Box, Button, Grid, Typography } from '@mui/material'
import axios from 'axios'
import {changeDesignationList} from '../../designationSlicer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Designation() {
    const designations = useSelector(state => state.designation.designationList)
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
                const response = await authAxios.get('/designations')
                dispatch(changeDesignationList(response.data.data.data))
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
        navigate('')
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
                Designation List
            </Typography>
            <Button onClick={handleClick} >Add Designation</Button>
    </Grid>   
        </Box>
        <Table/>
    </div>
  )
}

export default Designation