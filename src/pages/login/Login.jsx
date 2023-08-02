import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Card, CardActions, CardContent, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import NavBar from '../../components/navBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import {changeEmail,changePassword} from '../../ReactSlicer' 
import axios from 'axios';

function Login() {
  const email = useSelector(state =>state.login.email)
  const password = useSelector(state => state.login.password)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(email);

  const handleClick = async(e)=>{
    e.preventDefault()
    try{
      const formData = new FormData()
      formData.append('email',email)
      formData.append('password',password)
      console.log(formData);
      const response = await axios.post('http://training.pixbit.in/api/login',formData) 
      console.log(response);
      if(response.data.message ==='User Logged in'){
        localStorage.setItem('token',response.data.data.access_token)
        navigate('/')
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
            <h5>Login</h5>
            </div>
            <Divider/>
            <form>
                <Stack spacing={{ xs: 1, sm: 5 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>E-mail Address</label>
                <input id='email' type='text' name='email' onChange={(e)=>{dispatch(changeEmail(e.target.value))}}></input><br></br>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 10 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                
                <label for='password'>Password</label>
                <input id='password' type='password' name='password' onChange={(e)=>{dispatch(changePassword(e.target.value))}}></input><br></br>
                </Stack>
                <Box sx={{mx:23}}>
                <input id='rememberMe' type='checkbox'></input>
                <label for='rememberMe'>Remember Me</label>
                </Box>
            </form>
        </Box>
      </CardContent>
      <CardActions>
        <Box sx={{mx:22}}>
        <Button onClick={handleClick}>Login</Button>
        <Link id='forgotPasswordLink'>Forget your Password?</Link>
        </Box>
      </CardActions>
    </Card>
    </div>
  )
}

export default Login