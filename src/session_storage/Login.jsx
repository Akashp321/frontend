import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button  from '@mui/material/Button';
import { Link } from 'react-router-dom';
import  TextField  from '@mui/material/TextField';
const Login = () => {
  return (
    <>
      <Box sx={{ml:60}}>
        <Box>
      
        <Typography sx={{fontSize:30}}>Login page</Typography>
        <Box>
            <TextField type='text' placeholder='enter your name ' variant='standard' label="username"/>
        </Box>
        <Box>

            <TextField type='password' placeholder='enter your password ' variant='filled' label="password"/>
        </Box>
           <Button variant='contained' component={Link} to='/signup'>submit</Button>
       
      </Box>

    <Button component={Link} to='/signup'>signup page</Button>
          
        </Box>
    </>
  )
}

export default Login