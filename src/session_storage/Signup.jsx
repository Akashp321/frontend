import React, { useState,useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container  from '@mui/material/Container';
import Button  from '@mui/material/Button';
import { Link } from 'react-router-dom';
import  TextField  from '@mui/material/TextField';
const Signup = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [userd,setUserd]=useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/students');
          const data = await response.json();
          localStorage.setItem('userData', JSON.stringify(data));
          setUserd(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
    const handle=()=>{
    setUsername(...username,localStorage.setItem('Name',username));
   setPassword(localStorage.setItem(...password,'Password',password));
   setEmail(localStorage.setItem(...email,'Email',email));
   setUsername('');
   setEmail('')
   setPassword('');
   }
   const handleremove=()=>{
    localStorage.removeItem('Name');
    localStorage.removeItem('Password');
    localStorage.removeItem('Email');


   }
  return (
    <Box sx={{ml:60}}>
        <p>{userd}</p>
        
         <Typography sx={{fontSize:30}}>Signup page</Typography>
                <Box>
                    <TextField type='text' placeholder='enter your name ' variant='standard' label="username"value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </Box>
                <Box>
                    <TextField type='email' placeholder='enter your email ' variant='filled' label="Email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Box>
                <Box>
                    <TextField type='password' placeholder='enter your password ' variant='filled' label="password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Box>
                   <Button variant='contained' component={Link} to='/signup' onClick={handle}>submit</Button>
                   
                 
    </Box>
  )
}

export default Signup