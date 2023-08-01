import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import { Box, Button, Card, CardActions, CardContent, Divider, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

function Register() {
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
                <input id='name' type='text'></input><br></br>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 18 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='email'>Email Address</label>
                <input id='email' type='email'></input><br></br>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 22 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='password'>Password</label>
                <input id='password' type='password'></input><br></br>
                </Stack>
                <Stack spacing={{ xs: 1, sm: 14 }} direction="row" useFlexGap flexWrap="wrap" sx={{mx:5,mt:2,mb:2}}>
                <label for='confirmPassword'>Confirm Password</label>
                <input id='confirmPassword' type='password'></input><br></br>
                </Stack>
            </form>
        </Box>
      </CardContent>
      <CardActions>
        <Box sx={{mx:35}}>
        <Button>Register</Button>
        </Box>
      </CardActions>
    </Card>
    </div>
  )
}

export default Register