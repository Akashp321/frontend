import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { login } from '../services/authService';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      window.location.href = '/dashboard';
    } catch {
      setError('Invalid login credentials');
    }
    console.log(form);
    
  };
  

  return (
       <Container maxWidth="xl" sx={{backgroundImage:`url(${''})`}}>
      <Box mt={8} ml={10}  >
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit}>
          <Avatar alt='profile' src='https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg' sx={{width:75,height:75,marginLeft:30}}></Avatar>
           <Typography variant="p">Email</Typography><TextField fullWidth margin="normal" label="Email" name="email" onChange={handleChange} />
            <Typography variant="p">Password</Typography><TextField fullWidth margin="normal" label="Password" type="password" name="password" onChange={handleChange} />
          {error && <Typography color="error">{error}</Typography>}
          <Button fullWidth type="submit" variant="contained">Login</Button>
        </form>
        <Link href='./register'>New user</Link>
      </Box>
    </Container>

  );
};

export default LoginForm;