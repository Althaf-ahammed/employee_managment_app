import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import { Box, Button, Card, CardActions, CardContent, Divider, Stack } from '@mui/material'
import {changeEmail,changePassword,changeName,changepasswordConfirmation } from '../../RegisterSlicer'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const name = useSelector(state => state.register.name)
  const email = useSelector(state => state.register.email)
  const password = useSelector(state => state.register.password)
  const password_confirmation = useSelector(state => state.register.password_confirmation)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = async(e)=>{
    e.preventDefault()
    try{
      const formData = new FormData()
      formData.append('email',email)
      formData.append('password',password)
      formData.append('name',name)
      formData.append('password_confirmation',password_confirmation)
      const response = await axios.post('http://training.pixbit.in/api/register',formData) 
      console.log(response);
      if(response.data.message === 'User registered'){
        navigate('/login')
      }
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div>
        <NavBar/>
        <Card sx={{ mx:20,my:10, minWidth: 275 }}>
      <CardContent>
        <Box>
            <div className='loginHeader'>
            <h5>Register</h5>
            </div>
            <Divider/>
            <form>
                <Stack spacing={{ xs: 1, sm: 25 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='name'>Name</label>
                <input id='name' type='text' onChange={(e)=>{dispatch(changeName(e.target.value))}}></input><br></br>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 18 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Email Address</label>
                <input id='email' type='email'onChange={(e)=>{dispatch(changeEmail(e.target.value))}}></input><br></br>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 22 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='password'>Password</label>
                <input id='password' type='password' onChange={(e)=>{dispatch(changePassword(e.target.value))}}></input><br></br>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 14 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='confirmPassword'>Confirm Password</label>
                <input id='confirmPassword' type='password' onChange={(e)=>{dispatch(changepasswordConfirmation(e.target.value))}}></input><br></br>
                </Stack>
            </form>
        </Box>
      </CardContent>
      <CardActions>
        <Box sx={{mx:35}}>
        <Button onClick={handleClick}>Register</Button>
        </Box>
      </CardActions>
    </Card>
    </div>
  )
}

export default Register