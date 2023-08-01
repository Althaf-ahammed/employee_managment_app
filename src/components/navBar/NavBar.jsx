import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar id='navBar' position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography id='navBarHeader' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Manager
          </Typography>
          <Link to={'/login'}><Button >Login</Button></Link>
          <Link to={'/register'}><Button  >Register</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar