
import React, { useEffect } from 'react';
import {Container,Box,TextField,Button,Typography,Avatar,Link,List,ListItem,ListItemText,} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersFromSession, updateUserd, registerUser, deleteUser, filterByName,} from '../../redux/userSlice';
const SessionStorageredux=()=>{
  const dispatch = useDispatch();
  const { userd, filteredUsers, filterName } = useSelector((state) => state.user);
  useEffect(()=>{
    dispatch(loadUsersFromSession());
  }, [dispatch]);
  const handleChange=(e)=>{
    dispatch(updateUserd({ [e.target.name]: e.target.value }));
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(registerUser());
    alert('User registered successfully!');
  };
  const handleDelete=(name)=>{
    dispatch(deleteUser(name));
    alert(`User "${name}" deleted.`);
  };
  const handleFilter=(e)=>{
    dispatch(filterByName(e.target.value));
  };
  return (
    <Container maxWidth="xs">
      <Box mt={4}>
        <Typography variant="h5" align="center">Session Register</Typography>
        <form onSubmit={handleSubmit}>
          <Avatar
            src="https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
            sx={{ width: 75, height: 75, margin: 'auto' }}/>
          <TextField fullWidth margin="normal" label="Name" name="name" value={userd.name} onChange={handleChange}/>
          <TextField fullWidth margin="normal" label="Email" name="email" value={userd.email} onChange={handleChange}/>
          <TextField fullWidth margin="normal" label="Register No" name="registerNo" value={userd.registerNo} onChange={handleChange}/>
          <TextField
            fullWidth margin="normal" label="Password" type="password" name="password" value={userd.password} onChange={handleChange}/>
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
        <Box mt={4}>
          <TextField
            fullWidth
            margin="normal"
            label="Filter by Name"
            value={filterName}
            onChange={handleFilter}
          />
        </Box>
        <Box mt={4}>
          <Typography variant="h6">Registered Users:</Typography>
          {filteredUsers.length > 0 ? (
            <List>
              {filteredUsers.map((user, index) => (
                <ListItem
                  key={index}
                  sx={{ border: '1px solid #ccc', borderRadius: 1, mb: 1 }}
                  secondaryAction={
                    <Button
                      color="error"
                      variant="contained"
                      size="small"
                      onClick={() => handleDelete(user.name)}
                    >
                      Delete
                    </Button>
                  }
                >
                  <ListItemText
                    primary={user.name}
                    secondary={`Email: ${user.email}, Reg No: ${user.registerNo}`}/>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography color="text.secondary">No users found.</Typography>
          )}
        </Box>

        <Box mt={2} textAlign="center">
          <Link href="/">Already have an account?</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SessionStorageredux;
