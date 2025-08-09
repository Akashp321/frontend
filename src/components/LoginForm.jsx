import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Avatar, Link } from '@mui/material';
import { login } from '../services/authService';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid email or password.',err.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8}>
        <Typography variant="h5" align="center">Login</Typography>
        <form onSubmit={handleSubmit}>
          <Avatar src="https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" sx={{ width: 75, height: 75, margin: 'auto' }} />
          <TextField fullWidth margin="normal" label="Email" name="email" onChange={handleChange} value={form.email} />
          <TextField fullWidth margin="normal" label="Password" type="password" name="password" onChange={handleChange} value={form.password} />
          {error && <Typography color="error" align="center">{error}</Typography>}
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>Login</Button>
        </form>
        <Box mt={2} textAlign="center">
          <Link href="/register">New user? Register here.</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
