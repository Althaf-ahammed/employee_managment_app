import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, CardActions, CardContent, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import './login.css'
import NavBar from '../../components/navBar/NavBar';

function Login() {
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
                <input id='email' type='text'></input><br></br>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 10 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                
                <label for='password'>Password</label>
                <input id='password' type='password'></input><br></br>
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
        <Button>Login</Button>
        <Link id='forgotPasswordLink'>Forget your Password?</Link>
        </Box>
      </CardActions>
    </Card>
    </div>
  )
}

export default Login