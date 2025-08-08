import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Avatar, Link } from '@mui/material';
import { register } from '../services/authService';

const RegisterForm = () => {
  const [form, setForm] = useState({ email: '', password: '', name: '', registerNo: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      setMessage('Registration successful. Please login.');
      setForm({  name: '', email: '', registerNo: '',password: '', });
      setError('');
    } catch {
      setError('Email may already be registered.');
      setMessage('');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8}>
        <Typography variant="h5" align="center">Register</Typography>
        <form onSubmit={handleSubmit}>
          <Avatar src="https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg" sx={{ width: 75, height: 75, margin: 'auto' }} />
          <TextField fullWidth margin="normal" label="Name" name="name" onChange={handleChange} value={form.name} />
          <TextField fullWidth margin="normal" label="Email" name="email" onChange={handleChange} value={form.email} />
          <TextField fullWidth margin="normal" label="Register No" name="registerNo" onChange={handleChange} value={form.registerNo} />
          <TextField fullWidth margin="normal" label="Password" type="password" name="password" onChange={handleChange} value={form.password} />
          {message && <Typography color="primary" align="center">{message}</Typography>}
          {error && <Typography color="error" align="center">{error}</Typography>}
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>Register</Button>
        </form>
        <Box mt={2} textAlign="center">
          <Link href="/">Already have an account?</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
