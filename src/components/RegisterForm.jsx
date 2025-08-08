import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { register } from '../services/authService';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
const RegisterForm = () => {
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      setMessage('Registration successful. Please login.');
      setForm({ email: '', password: '', name: '' });
    } catch (err) {
      setError('Email may already be registered.',err.message);
    }
    console.log(form)
  };
const column=[ { field: 'id', headerName: 'ID', width: 90 },
  {
    field: '_id',
    headerName: 'id',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
   {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  }, {
    field: 'registerno',
    headerName: 'RegisterNo',
    width: 150,
    editable: true,
  },
]
const rows=[{id:form._id,name:form.name,email:form.email,registerno:form.registerno}]
  return (
    <Container maxWidth="xs">
      <Box mt={8}>
        <Typography variant="h5">Register Form</Typography>
          <Avatar alt='profile' src='https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg' sx={{width:75,height:75,marginLeft:20}}></Avatar>
        <form onSubmit={handleSubmit}>
          <Typography variant="p">Name</Typography> <TextField fullWidth margin="normal" label="Name" name="name" onChange={handleChange} />
          <Typography variant="p">Email</Typography> <TextField fullWidth margin="normal" label="Email" name="email" onChange={handleChange} />
           <Typography variant="p">RegisterNo</Typography>  <TextField fullWidth margin="normal" label="RegisterNo" name="registerNo" onChange={handleChange} />
          <Typography variant="p">Password</Typography> <TextField fullWidth margin="normal" label="Password" type="password" name="password" onChange={handleChange} />
          {message && <Typography color="primary">{message}</Typography>}
          {error && <Typography color="error">{error}</Typography>}
          <Link href='./'>Have a Account</Link>
          <Button fullWidth type="submit" variant="contained">Register</Button>
        </form>
      </Box>
      {/* <DataGrid rows={rows}
      columns={column}
      initialState={{
        pagination: {
            paginationModel: {
              pageSize: 5,
            },
          }
      }}
      pageSizeOption={[5]}
      checkboxSelection
      disableRowSelectiononClick
      /> */}


    </Container>
  );
};

export default RegisterForm;